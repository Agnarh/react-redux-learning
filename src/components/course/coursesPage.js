import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

var CoursesPage = React.createClass({
    propTypes: {
        actions: PropTypes.object.isRequired,
        courses: PropTypes.array.isRequired
    },
    getInitialState: function () {
        return {
            course: { title: '' }
        };
    },
    onTitleChange: function (event) {
        var course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    },
    onClickSave: function () {
        this.props.actions.createCourse(this.state.course);
    },
    courseRow: function (course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    },
    render: function () {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }    
});

function mapStateToProps(state, ownProps) {
    return { 
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);