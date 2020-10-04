import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => {
    return (
        <React.Fragment>
            <div className="layout">
                <div className="content">
                    <h2>Categories</h2>
                    {props.categories.map((category, index) => (
                        <div key={index}>
                            <img src={category.image} alt={category.name} />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

export default connect(mapStateToProps)(Categories);