(() => {

    
    function showSpinner() {
        const spinner = document.createElement('div');
        spinner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20%" viewBox="0 0 812 812" width="100%" style="position: fixed; top: 40%; left: 60%; transform: translate(-50%, -50%); fill: #14a2bbcb ;"><g transform="rotate(0 206 206)"><path d="M244.625 38.625a38.625 38.625 0 1 0 -77.25 0 38.625 38.625 0 1 0 77.25 0zm0 334.75a38.625 38.625 0 1 0 -77.25 0 38.625 38.625 0 1 0 77.25 0zM38.625 244.625a38.625 38.625 0 1 0 0 -77.25 38.625 38.625 0 1 0 0 77.25zm373.375 -38.625a38.625 38.625 0 1 0 -77.25 0 38.625 38.625 0 1 0 77.25 0zM114.99 351.648A38.625 38.625 0 1 0 60.352 297.01a38.625 38.625 0 1 0 54.638 54.638zm0 -236.739A38.625 38.625 0 1 0 60.352 60.352a38.625 38.625 0 1 0 54.638 54.638zM297.01 351.648a38.625 38.625 0 1 0 54.638 -54.638 38.625 38.625 0 1 0 -54.638 54.638z"/><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 206 206" to="360 206 206" repeatCount="indefinite"/></g></svg>`;
        spinner.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #161616; display: flex; justify-content: center; align-items: center; z-index: 9999;';
        document.body.appendChild(spinner);
        return spinner;
    }

    function removeSpinner(spinner) {
        spinner.parentNode.removeChild(spinner);
    }

    const spinner = showSpinner();
    setTimeout(function () {
        removeSpinner(spinner);
    }, 3000);
    

})();


