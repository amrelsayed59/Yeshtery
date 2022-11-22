import { store } from 'react-notifications-component';

export const getAllProducts = async () => {
  return await fetch('../products.json')
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => {
      console.log('error happened', error);
      store.addNotification({
        title: 'Something Went Wrong!',
        message: 'Error Happened',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
          pauseOnHover: true,
        },
      });
    });
};
