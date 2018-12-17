import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const globalStyles = {
  titleFont: {
    fontFamily: "Quicksand",
    fontSize: 25,
    letterSpacing: 2
  },

  titleFontLoginForgotPassword: {
    color: '#5D5D5D',
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'Quicksand',
    height: height / 2
  },
  logoImageLoginForgotPassword: {
    height: height / 5,
    width: width / 4,
    alignSelf: 'center',
    resizeMode: 'center'
  },
  logoContainerLoginForgotPassword: {
    justifyContent: 'space-between',
    height: height / 8,
    marginTop: 20
  },

  textFont: {
    fontFamily: "Quicksand",
    fontSize: 14
  },

  inputBoxFont: {
    fontFamily: "Avenir",
    fontSize: 13,
    fontWeight: "900"
  },

  greyTextColor: { color: "#5D5D5D" },
  lightGreyTextColor: { color: '#B5ADAD' },
  blueGradientColor: { start: { color: "#A4E8FF" }, end: { color: "#6BCCFD" } },
  pinkGradientColor: { start: { color: "#FDCCC8" }, end: { color: "#FFB5BA" } },

  screenGradientColor: {
    start: { color: "#BBDED6" },
    end: { color: "#FAE3D9" }
  },
  modalGradientColor: {
    start: { color: "#F3E3D8" },
    end: { color: "#fff" }
  },

  navigationHeader: {
    backgroundColor: "#bbded6",
    borderBottomColor: "transparent"
  },
  navigationTitle: {
    color: "#fff"
  },


  inputElements: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 3,
    width: width / 1.1,
    padding: 12
  },
  inputBorderShadow: {
    borderColor: '#FFFF',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#B5ADAD',
    shadowOffset: { height: 1, width: 1 }
  },
  linksLoginForgotPassword: {
    color: '#B5ADAD',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Avenir'
  },
  buttonElements: {
    borderRadius: 30,
    width: width / 2.5,
    padding: 12
  },
  buttonText: {
    color: '#FFFF',
    alignSelf: 'center',
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};

export default globalStyles;
