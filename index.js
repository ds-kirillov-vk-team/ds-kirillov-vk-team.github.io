(function run() {
  const iframeContent = `
      <html lang="en">
        <head>
            <meta charset="utf-8" />
            <script>
                console.log('Iframe Смонтировался')
            </script>
            <script>
            (async () => {
            const topics = await document?.browsingTopics();
            console.warn("топики");
            console.log(topics);
            })();
            </script>
        </head>
        <body>
          <h2>Я айфрейм, привет</h2>
        </body>
      </html>
`;

    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

    document.querySelector("iframe").contentDocument.write(iframeContent);
})();
