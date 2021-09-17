<script>
  import axios from "axios"; // axios 対応追記
 
  import { onMount } from "svelte"; // axios 対応追記
 
  let name = "Node-RED"; // world -> Node-RED
 
  let timeStamp = 0;
 
  // axios 対応追記
  onMount(async () => {
    const res = await getTimestamp();
  });
 
  // axios 対応追記
  async function getTimestamp() {
    // 開発サーバーと本番サーバーでの分岐処理 ここから
    let urlTimeStampAPI = "/api1";
    let localEndPoint = "//localhost:18801";
    if (window.location.host == "localhost:5000") {
      // Svelte 開発サーバーのポートは 5000
      // 開発サーバー(npm run dev)
      urlTimeStampAPI = localEndPoint + urlTimeStampAPI;
    } // ここまで
    console.log("urlTimeStampAPI ", urlTimeStampAPI);
    const response = await axios.get(urlTimeStampAPI);
    console.log(response);
    timeStamp = response.data.timestamp;
  }
</script>
 
<div class="container">
  <div class="row">
    <div class="row">
      <div class="col-sm">
        <h1>Hello {name}!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <!-- axios 対応追記 -->
        <h3>Timestamp : {timeStamp}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  </div>
</div>