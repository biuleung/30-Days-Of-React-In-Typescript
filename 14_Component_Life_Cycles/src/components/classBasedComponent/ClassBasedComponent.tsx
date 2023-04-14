import { Component } from 'react';

export class ClassBasedComponent extends Component<
    { name: string },
    { name: string; count: number }
> {
    intv: any;
    constructor(props: any) {
        super(props);

        this.state = {
            name: this.props.name,
            count: 0,
        };

        console.log(
            'constructor: Call before any other methods ',
            'name: ',
            this.props.name
        );
    }

    static getDerivedStateFromProps(
        props: { name: string },
        state: { count: number }
    ) {
        console.log(
            'I am getDerivedStateFromProps and I will be the second to run.'
        );

        return {
            name: props.name + '_in_getDerivedStateFromProps_' + state.count,
        };
    }

    componentDidMount() {
        console.log('I am componentDidMount and I will be last to run.');
        this.incrementCounter();
    }

    incrementCounter() {
        this.intv = setInterval(() => {
            this.setState(
                (prevState) => ({
                    count: prevState.count + 1,
                }),
                () => {
                    console.log('current state.count: ', this.state.count);
                }
            );
        }, 3000);
    }

    shouldComponentUpdate(
        nexProps: { name: string },
        nextState: { name: string; count: number }
    ) {
        console.log('shouldComponentUpdate: ', nextState.count);
        if (nextState.count > 4) {
            return false;
        }
        // if the return is true, the application will never update.
        return true;
    }

    componentDidUpdate(
        nexProps: { name: string },
        nextState: { name: string; count: number }
    ) {
        console.log('componentDidUpdate: ', nextState.count);
    }

    componentWillUnmount() {
        clearInterval(this.intv);
    }

    render() {
        return (
            <div>
                <div>ClassBasedComponent</div>
                <div>Name: {this.state.name}</div>
                <div>Count: {this.state.count}</div>
            </div>
        );
    }
}

export default ClassBasedComponent;
