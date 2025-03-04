document.addEventListener("DOMContentLoaded", function() {
    let scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

    scanner.render(
        function(decodedText) {
            document.getElementById("result").innerText = "Scan Result: " + decodedText;
            scanner.clear();
        },
        function(errorMessage) {
            console.log(errorMessage);
        }
    );
});