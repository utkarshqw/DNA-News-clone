function navbar() {
    return `
    <div>
    <div id="dna">
        <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" id="img1">
        <h4>हिंदी में पढ़ें</h4>
       </div>
    <div id="black">
        <div><a href="#"><img src="https://english.cdn.zeenews.com/static/public/menusearch.svg" alt="" id="img"></a>
            <div class="search-drop">
                <div>
                    <input type="text" id="query" placeholder="Search on DNA...">
                    <button id="search">Go</button>
                 </div>
             </div>
            </div>
    </div>
</div>
    `;
}

export default navbar;



