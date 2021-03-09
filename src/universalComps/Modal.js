import React from 'react';

const Modal = (props) => {
  let modalClasses = ['modal'];
  let backgroundClasses = ['modal-background']
  if(!props.display) {
    modalClasses.push('hide-modal');
    backgroundClasses.push('hide-modal');
  }

  const closeModal = () => {
    if(props.closeHandler) {
      props.closeHandler();
    } else {
      console.error('No close handler assigned');
    }
  }
 
  return (
    <>
    <div className={backgroundClasses.join(' ')} onClick={closeModal}>
    </div>
      <div className={modalClasses.join(' ')} onClick={() => {}}>
        {props.children}
      </div>
    </>
  );
};

export default Modal;