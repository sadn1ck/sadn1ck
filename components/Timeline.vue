<template>
  <div>
    <!-- Latest update -->
    <vue-timeline-update
      theme="light"
      :date="new Date('2019-08-24')"
      title="Joined IIEST Shibpur"
      description="oined IIEST Shibpur"
      thumbnail=""
      category="announcement"
      icon="code"
      color="blue"
    />
    <vue-timeline-update
      theme="light"
      :date="new Date('2019-05-08')"
      title="Completed 12th standard | Finished School"
      description="ISC Results declared, scored 96.75%"
      thumbnail=""
      category="graduation"
      icon="school"
      color="red"
    />
    <vue-timeline-update
      theme="light"
      :date="new Date('2017-05-15')"
      title="Completed 10th standard"
      description="ICSE Results declared, scored 97.4%"
      thumbnail=""
      category="announcement"
      icon="school"
      color="green"
    />
  </div>
</template>
<script>
export default {
}
</script>
