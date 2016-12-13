import React from 'react'
import 'isomorphic-fetch'
export default class extends React.Component {
    static async getInitialProps () {
        const res = await fetch('http://localhost:4000/books');
        const data = await res.json();
        console.log(data);
        return { books: data };
    }

    render() {
        return <div>
                {/*<strong>{this.props}</strong>*/}
            </div>
    }
}