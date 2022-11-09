import React from 'react';

export default class BitrixForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ID = "b23401302";
    
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;

    s.setAttribute("data-b24-form", "inline/3/cmb3ae");
    s.setAttribute("data-skip-moving", "true");

    s.innerHTML = `(function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn-ru.bitrix24.ru/${ID}/crm/form/loader_3.js');`;
    this.instance.appendChild(s);
  }

  render() {
    return (
      <section id="BitrixForm" class="row gx-4 justify-content-center">
        <h1 class="mb-4" style={{'text-align': 'center'}}>Записаться на прием</h1>
          <div ref={el => (this.instance = el)} />
      </section>
    )
  }
}