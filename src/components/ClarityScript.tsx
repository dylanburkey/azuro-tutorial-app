import React from 'react';

function ClarityScript() {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://www.clarity.ms/tag/mmacnr4e3b`; // Replace with your Clarity project ID
        document.body.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return null;
}

export default ClarityScript;
