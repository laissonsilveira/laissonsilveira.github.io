(function loader() {

    function startGa() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-15503310-8');
    }

    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            startGa();
        }
    };
}());