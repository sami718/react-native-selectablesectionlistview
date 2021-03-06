'use strict';

var React = require('react-native');
var {Component, StyleSheet, View, Text} = React;
import PropTypes from 'prop-types';
var UIManager = require('NativeModules').UIManager;
class SectionHeader extends Component {

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(this.refs.view.getNodeHandle(), this.props.sectionId);
  }

  render() {
    var SectionComponent = this.props.component;
    var content = SectionComponent ?
      <SectionComponent {...this.props} /> :
      <Text style={styles.text}>{this.props.title}</Text>;

    return (
      <View ref="view" style={styles.container}>
        {content}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ececec'
  },
  text: {
    fontWeight: '700',
    paddingTop:2,
    paddingBottom:2,
    paddingLeft: 2
  }
});

SectionHeader.propTypes = {

  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * A component to render for each section item
   */
  component: PropTypes.func,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func

};

module.exports = SectionHeader;
