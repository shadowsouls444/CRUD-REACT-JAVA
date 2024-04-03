import React, { useEffect } from 'react';

export const paypal = () => {
  return (
    
    function PayPalButton() {
      useEffect(() => {
        const initPayPalButton = () => {
          window.paypal.Buttons({
            style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'pay',
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "LA DESCRIPCION DE TU PRODUCTO",
                    amount: {
                      currency_code: "USD",
                      value: 200
                    }
                  }
                ]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(function(orderData) {
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                // Redirecciona a la página de gracias
                window.location.href = 'LA URL DE TU PAGINA DE GRACIAS';
              });
            },
            onError: (err) => {
              console.log(err);
            }
          }).render('#paypal-button-container');
        };
    
        // Llama a la función de inicialización cuando el componente se monta
        initPayPalButton();
    
        // Limpia el botón de PayPal al desmontar el componente
        return () => {
          document.getElementById('paypal-button-container').innerHTML = '';
        };
      }, []);
    
      return <div id="paypal-button-container"></div>;
    }

  )
}

export default paypal;
