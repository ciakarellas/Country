// postanowiłem opisac linijke po linijce kod. Mozec coś xle zrozumialem


var url = 'https://restcountries.eu/rest/v1/name/'; // przypisuje do zmienej adres url z którego na koncu po dodaniu nazwy kraju bede w tablicy której będe mogł pobierać dane o kraju wyszukiwania
var countriesList = $("#countries"); //tutaj za pomoc JQ pobieram listę krajów jakie znajdu się w ul z id="countries"

$('#search').click(searchCountries); 
/*Tu za pomoca JQ wyszukuje element w html który my id "search" czyli nasz butto i nasłuchuje czy jest on kliknięty. Jeśli zostanie kliknięty wlaczy się funkcje searchCountries. Swoja droga czemu po searchCountries nie daje () skoro to funkcja*/

function searchCuntries() { //definiujemy funkcje
	var countryName = $('#country-name').val(); // pobieramy  do zmiennej nazwe państwa która ktoś wpisal w input
	if (!countryName.length) countryName = "Poland"; //sprawdzamy czy ktoś cos wpisal do wyszukiwania. Jeśli nic nie wpisał a nacisnł button to przypisujemy mu Poland

	$.ajax({// JQ zapytanie ajacowe
		url: url + countryName, //linkujemy do kraju do którego ktoś chce się dowiedzieć więcej informacji
		method: 'GET', //pobieramy dane o wyszukiwanym kraju
		success: showCountriesList //jeżeli uda nam się pobrać info uruchamia się ta funkcja która ma za zadanie pokazać nam listę krajów. Znów nie kumam czemu, skoro to funkcja nie dajemy nawiasów i nie wpisujemy (resp)
	});
}

function showContriesList(resp){ //definiujemy funkcje. Jeszcze nie wiem jak bedzie użyty resp. Zakładam że ta zmienne będzie zmieniał jsona tak bym mógł nim manipulować w JS
	countriesList.empty(); //Czyścimy listę z starych wyszukiwań

}

/* brakuje nam jeszcze w fukcji przjęcia danych z API o wyszukiwaych krajach oraz włożenie ich do ul o id "countries"*/