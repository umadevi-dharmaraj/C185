import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Text style={styles.titleText1}>FR</Text>
						<Text style={styles.titleText2}>APP</Text>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Text style={styles.subheading1}>To Our</Text>
						<Text style={styles.subheading2}> Cool Frames</Text>
					</View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{flex:0.5}}>
                        <Text style={styles.contentText}>Experience the virtual Experience of trying out different 
                            frames from our wide collection on your mobile phone before making 
                            any purchase, just like how you would in offline store!</Text>

                    </View>
                    <View style={{flexDirection:"row", flex:0.25}}>
                        <View style={{flex:0.5}}>
                            <Image source={require("../assets/Frapp-03.png")} style={{height:64, width:160}} />
                        </View>
                        <View style={{flex:0.5}}>
                            <Image source={require("../assets/Frapp-09.png")} style={{height:64, width:160}} />
                        </View>
                    </View>
                    <View style={{flexDirection:"row", flex:0.25}}>
                        <View style={{flex:0.5}}>
                            <Image source={require("../assets/Frapp-02.png")} style={{height:64, width:160}} />
                        </View>
                        <View style={{flex:0.5}}>
                            <Image source={require("../assets/Frapp-08.png")} style={{height:64, width:160}} />
                        </View>
                    </View>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={()=>
                            this.props.navigation.navigate("Main")
                        }>
                            <Text style={styles.buttonText}> Try Now!</Text>

                    </TouchableOpacity>

                </View>

               

            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
		flex: 1,
	},
	droidSafeArea: {
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	headingContainer: {
		flex: 0.15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#6278e4',
	},
	titleText1: {
		fontSize: RFValue(30),
		fontWeight: 'bold',
		color: '#efb141',
		fontStyle: 'italic',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -3, height: 3 },
		textShadowRadius: 1,
	},
	titleText2: {
		fontSize: RFValue(30),
		fontWeight: 'bold',
		color: 'white',
		fontStyle: 'italic',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -3, height: 3 },
		textShadowRadius: 1,
	},
	subheading1: {
		fontSize: RFValue(20),
		color: '#efb141',
		fontStyle: 'italic',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -3, height: 3 },
		textShadowRadius: 1,
	},
	subheading2: {
		fontSize: RFValue(20),
		color: 'white',
		fontStyle: 'italic',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -3, height: 3 },
		textShadowRadius: 1,
	},
	cameraStyle: {
		flex: 0.65,
	},
	framesContainer: {
		flex: 0.2,
		paddingLeft: RFValue(20),
		paddingRight: RFValue(20),
		paddingTop: RFValue(10),
		backgroundColor: '#6278e4',
	},
	filterImageContainer: {
		height: RFPercentage(8),
		width: RFPercentage(15),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4e7f8',
		borderRadius: 30,
		marginRight: 20,
	},
	categoryContainer: {
		flex: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: RFValue(10),
	},
	categoryBox: {
		flex: 0.2,
		borderRadius: 30,
		borderWidth: 1,
		backgroundColor: 'white',
		width: '100%',
		padding: RFValue(3),
		margin: 1,
		alignItems: 'center',
	},
	categoryBoxSelected: {
		flex: 0.2,
		borderRadius: 30,
		borderWidth: 1,
		backgroundColor: '#efb141',
		width: '100%',
		padding: RFValue(3),
		margin: 1,
		alignItems: 'center',
	},
    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor:"white",
        height:'100%',
        padding:RFValue(20)
    },
    contentText:{
        fontSize: RFValue(17),
        fontStyle:'italic',
        fontWeight:'bold'
    },
    buttonContainer:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:'#efb141',
        paddingLeft: RFValue(50),
        paddingRight:RFValue(50),
        paddingTop:RFValue(20),
        paddingBottom:RFValue(20),
        borderRadius:RFValue(20)
    },
    buttonText:{
        fontSize: RFValue(25),
        fontStyle:'italic',
        color:'white',
        textShadowColor:'rgba(0,0,0,0.75)',
        textShadowOffset:{width:-1, height:1},
        textShadowRadius:1
    }
    
})