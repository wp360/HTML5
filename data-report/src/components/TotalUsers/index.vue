<template>
  <div>
    <common-card />
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalUsers',
  mixins: [commonCardMixin]
}
</script>
