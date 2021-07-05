import { useState, useEffect } from "react";

const AirTable = () => {
  return (
    <>
      <div>
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/shruHcdJklA9eiRUo?backgroundColor=cyan&layout=card&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrNNg8FB0rOZAk3h?backgroundColor=cyan"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </>
  );
};

export default AirTable;
