CREATE TABLE IF NOT EXISTS thoughts (
  id TEXT NOT NULL,
  version INTEGER DEFAULT 1 NOT NULL,
  content TEXT NOT NULL,
  created_at INTEGER DEFAULT (unixepoch()) NOT NULL,
  PRIMARY KEY (id, version)
);

-- Optional: Add a sample thought for local dev
INSERT INTO thoughts (id, content) 
SELECT 'first-thought', 'Hello from the local seed!'
WHERE NOT EXISTS (SELECT 1 FROM thoughts WHERE id = 'first-thought');
