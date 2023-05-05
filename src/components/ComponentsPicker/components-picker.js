import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from "classnames";

import { uuid } from '../../utils/uuid';
import { componentsActions } from '../../store/components';
import { AvailableComponents } from '../Components';

import './components-picker.css'

export const ComponentsPicker = (props) => {
  const dispatch = useDispatch();
  const onComponentClick = layout => dispatch(componentsActions.addComponent({id: uuid(), layout}));


  const componentClass = classNames( {
    "components-picker__component": !props.lockedPicker,
    "components-picker__component--disabled": props.lockedPicker
  });

  return (
    <div className="components-picker">
      {AvailableComponents.map(component => (
        <div
          className={ componentClass }
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
}

ComponentsPicker.propTypes = {
  lockedPicker: PropTypes.bool.isRequired
};
