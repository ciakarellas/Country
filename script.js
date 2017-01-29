var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $("#countries");

$('#search').click(searchCountries);

function searchCuntries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) countryName = "Poland";

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showContriesList(resp){
	countriesList.empty();

}