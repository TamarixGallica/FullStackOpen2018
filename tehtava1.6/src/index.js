import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.viesti}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0]} />
            <Osa osa={props.osat[1]} />
            <Osa osa={props.osat[2]} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    )
}

class App extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klikHyva = () => {
        this.setState( {
            hyva: this.state.hyva + 1
        } )
    }

    klikNeutraali = () => {
        this.setState( {
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState( {
            huono: this.state.huono + 1
        })
    }

    render() {
        return (
            <div>
                <Otsikko viesti={"anna palautetta"} />
                <button onClick={this.klikHyva}>hyvä</button>
                <button onClick={this.klikNeutraali}>neutraali</button>
                <button onClick={this.klikHuono}>huono</button>
                <Otsikko viesti={"statistiikka"} />
                <div>hyvä {this.state.hyva}</div>
                <div>neutraali {this.state.neutraali}</div>
                <div>huono {this.state.huono}</div>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
