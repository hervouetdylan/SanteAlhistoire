import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost/Santealhistoire/Back/dbhandler.php?ID=5')
            .then(response => {
                this.setState({
                    name: response.data.name,
                    date: response.data.Date
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.Container}>
                <GestureFlipView width={300} height={300}>
                    {this.renderFront()}
                    {this.renderBack()}
                </GestureFlipView>
            </View>
        )
    }

    renderFront = () => {
        return (
            <View style={styles.frontStyle}>
                <Text style={{ fontSize: 25, color: '#fff' }}>{this.state.name}</Text>
            </View>
        )
    };

    renderBack = () => {
        return (
            <View style={styles.backStyle}>
                <Text style={{ fontSize: 25, color: '#fff' }}>{this.state.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'white',
    }
})

export default Game;
