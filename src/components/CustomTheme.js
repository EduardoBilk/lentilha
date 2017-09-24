import getMuiTheme from 'material-ui/styles/getMuiTheme';
const CustomTheme = getMuiTheme({
  palette: {
    textColor: 'rgb(169, 123, 108)',
    primary1Color: 'rgb(254, 203, 131)'
  },
  bottomNavigation: {
    height: '8vh'
  }
});
export default CustomTheme;
