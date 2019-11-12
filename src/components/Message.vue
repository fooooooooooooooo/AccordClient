<template>
  <div class="message">
    <div class="messageHeader">
      <div class="messageHeaderAvatar">
        <div role="img" style="width: 40px; height: 40px">
          <img :src="avatar_url" class="userAvatar" />
        </div>
      </div>
      <div class="messageHeaderInner">
        <div class="messageHeaderUsername">
          <span class="username" :style="color">{{username}}</span>
        </div>
        <div class="messageHeaderTimestamp">
          <time class="timestamp" :datetime="timestamp">
            <span class="messageTimestamp">{{timestamp_string}}</span>
          </time>
        </div>
      </div>
    </div>
    <div class="messageContent">
      <div class="messageContainer">
        <div class="userMessage">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: "message",
      username: "username",
      timestamp: 10000000,
      timestamp_string: "Today",
      color: "color: rgb(0,255,0);",
      avatar_url: "https://cdn.discordapp.com/emojis/502832013116702730.png"
    };
  }
};
</script>

<style scoped>
:root {
  --messageColor: #dcddde;
  --textMuted: #72767d;
}

.message {
  -webkit-box-flex: 0;
  box-sizing: border-box;
  flex: 0 0 auto;
  height: 44px;
  user-select: text;
  word-wrap: break-word;
}

.messageHeader {
  align-content: start;
  align-items: flex-start;
  border: 0;
  display: flex;
  font-size: 100%;
  height: 1.375em;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.messageHeaderAvatar {
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  opacity: 1;
  position: relative;
  top: 2px;
}

.userAvatar {
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
}

.messageHeaderInner {
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  color: var(--textMuted);
  display: flex;
  flex-direction: row;
  line-height: 16px;
  min-height: 0;
  min-width: 0;
  white-space: nowrap;
  align-items: center;
}

.messageHeaderUsername {
  vertical-align: baseline;
  min-width: 0;
  order: 1;
}

.username {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375em;
}

.messageHeaderTimestamp {
  color: var(--textMuted);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 12px;
  margin-left: 0.3rem;
  min-width: 0;
  order: 2;
}

.timestamp {
  color: var(--textMuted);
  line-height: 12px;
}

.messageTimestamp {
  color: var(--textMuted);
}

.messageContent {
  margin-left: 80px;
  padding-right: 10px;
}

.messageContainer {
  user-select: text;
}

.userMessage {
  -moz-user-select: text;
  -ms-user-select: text;
  -webkit-user-select: text;
  color: var(--messageColor);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375;
  user-select: text;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>