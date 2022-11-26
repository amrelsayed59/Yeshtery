const Main: React.FC<any> = (state, action) => {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload };

    case 'search_history':
      localStorage.setItem('search_history', JSON.stringify(action.payload));
      return { ...state, search_History: action.payload };

    case 'default_logo':
      return { ...state, default_logo: action.payload };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default Main;
