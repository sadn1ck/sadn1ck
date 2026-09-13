const source = document.querySelector("#source");
const saveButton = document.querySelector("#save");
const status = document.querySelector("#status");
const diagnostics = document.querySelector("#diagnostics");
const conflict = document.querySelector("#conflict");
const pdf = document.querySelector("#pdf");
const download = document.querySelector("#download");
const previewStatus = document.querySelector("#preview-status");
const emptyPreview = document.querySelector("#empty-preview");
let savedSource;
let revision;
let pdfVersion;
let previewMessage = "Waiting for first compilation";
let busy = false;
let saveRequested = false;
let timer;

if (!navigator.platform.includes("Mac")) document.querySelector("kbd").textContent = "Ctrl S";

function setStatus(text, failed = false) {
  status.textContent = text;
  status.dataset.error = String(failed);
}

function showConflict() {
  clearTimeout(timer);
  saveRequested = false;
  conflict.hidden = false;
  setStatus("File changed on disk", true);
}

function showPreview(state) {
  diagnostics.textContent = state.error || state.warnings;
  diagnostics.hidden = !diagnostics.textContent;
  if (state.pdfVersion && state.pdfVersion !== pdfVersion) {
    pdfVersion = state.pdfVersion;
    previewMessage = "Loading PDF…";
    pdf.src = `/__resume?asset=pdf&v=${pdfVersion}#toolbar=0&navpanes=0&view=FitH`;
    download.href = `/__resume?asset=pdf&v=${pdfVersion}`;
    pdf.hidden = false;
    download.hidden = false;
    emptyPreview.hidden = true;
  }
  previewStatus.textContent = state.error
    ? pdfVersion
      ? "Last successful PDF · current source has errors"
      : "Compilation failed"
    : previewMessage;
  if (!pdfVersion && state.error) emptyPreview.textContent = "Fix the source to see your PDF.";
  if (source.value !== savedSource) setStatus("Unsaved changes");
  else setStatus(state.error ? "Saved · compilation failed" : "Saved", Boolean(state.error));
}

async function request(options) {
  const response = await fetch(options ? "/__resume" : "/__resume?asset=state", options);
  const state = await response.json();
  if (!response.ok) {
    if (response.status === 409) showConflict();
    throw new Error(state.error);
  }
  return state;
}

function reportError(error) {
  setStatus("Needs attention", true);
  diagnostics.hidden = false;
  diagnostics.textContent = error.message;
}

function finished() {
  busy = false;
  if (saveRequested && conflict.hidden) {
    saveRequested = false;
    void save();
  }
}

async function refresh(loadDisk = false) {
  if (busy || (!loadDisk && !conflict.hidden)) return;
  busy = true;
  try {
    const state = await request();
    if (
      !loadDisk &&
      revision &&
      state.revision !== revision &&
      source.value !== savedSource &&
      source.value !== state.source
    ) {
      showConflict();
      return;
    }
    if (loadDisk || !revision || source.value === savedSource || source.value === state.source) {
      if (source.value !== state.source) source.value = state.source;
      savedSource = state.source;
      revision = state.revision;
      source.disabled = false;
      saveButton.disabled = false;
      conflict.hidden = true;
    }
    showPreview(state);
  } catch (error) {
    reportError(error);
  } finally {
    finished();
  }
}

async function save() {
  clearTimeout(timer);
  if (!revision || !conflict.hidden) return;
  if (busy) {
    saveRequested = true;
    return;
  }
  busy = true;
  const snapshot = source.value;
  setStatus("Saving & compiling…");
  try {
    const state = await request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: snapshot, revision }),
    });
    savedSource = snapshot;
    revision = state.revision;
    showPreview(state);
  } catch (error) {
    reportError(error);
  } finally {
    finished();
  }
}

source.addEventListener("input", () => {
  clearTimeout(timer);
  if (!conflict.hidden) return;
  setStatus("Unsaved changes");
  timer = setTimeout(save, 800);
});
source.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || event.shiftKey) return;
  event.preventDefault();
  source.setRangeText("  ", source.selectionStart, source.selectionEnd, "end");
  source.dispatchEvent(new Event("input"));
});
saveButton.addEventListener("click", save);
document.querySelector("#load-disk").addEventListener("click", () => {
  clearTimeout(timer);
  saveRequested = false;
  void refresh(true);
});
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    void save();
  }
});
window.addEventListener("beforeunload", (event) => {
  if (revision && (source.value !== savedSource || busy)) {
    event.preventDefault();
    event.returnValue = "";
  }
});

void refresh();
// Poll only when idle: external edits refresh without replacing unsaved browser edits.
setInterval(() => {
  if (!document.hidden && (!revision || source.value === savedSource)) void refresh();
}, 2000);
