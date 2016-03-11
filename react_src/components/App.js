function getAppState(){
	return {
		movies:MyStore.getMovies()
	}
}


var  App = React.createClass ({
	getInitialState:function() {
	    return getAppState();
	},
	componentDidMount:function() {
		MyStore.addChangeListener(this._onChange);	      
	},
	componentWillUnmount:function() {
		MyStore.removeChangeListener(this._onChange);	      
	},
	_onChange:function(){
		this.setState(getAppState());
	},
    render() {
    	console.log(this.state.movies);
        return <div>

        	</div>;
    }
});

export default MovieApp
