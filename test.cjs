const { Client } = require("brawlstars");

const bsClient = new Client(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAzMTcyMTlmLWExOTMtNGRiZS05MTFhLWM1YzQ2NTk2Yzk0ZCIsImlhdCI6MTczMjkwMTM4NCwic3ViIjoiZGV2ZWxvcGVyLzJhNjVkMTJkLTFjZWItNDIzYS0xMGM3LTBhOWRhNTBlN2ExYiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjEzLjE2NC4xMTIuMTQyIl0sInR5cGUiOiJjbGllbnQifV19.p7mMoa8Y5DXBadOT1PddNc8EmYeylmjixJBWcnXII9cfEMGBhm_3sph8N0HpedRu6w15sex39zCqyvOjokI-Sg"
);

bsClient.getPlayer("Q2V2UQ88Q").then((player) => console.log(player.name));
// console.log(player.name);
