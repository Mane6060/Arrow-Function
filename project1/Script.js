

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9860aa9604msh5970269e4c023adp1c9e2cjsnd4513b0f71cb',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};
function GET(url){
fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	console.log(data.result)
}