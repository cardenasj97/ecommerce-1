import React from 'react';
import { connect } from 'react-redux';
import NavigationComponent from '../Footer/NavigationComponent';
import ToolbarComponent from '../Header/ToolbarComponent';

const Categories = (props) => {
    return (
        <React.Fragment>
            <ToolbarComponent />
            <div className="layout">
                <div className="content">
                    <h2>Categories</h2>
                    {props.categories.map((category, index) => (
                        <div key={index}>{category.name}</div>
                    ))}
                </div>
            </div>
            <NavigationComponent />
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

export default connect(mapStateToProps)(Categories);