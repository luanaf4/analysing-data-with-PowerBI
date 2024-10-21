function fetchWorldBankData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Internet Access Data') || ss.insertSheet('Internet Access Data');
  sheet.clear();
  
  // Definir cabeçalhos
  sheet.appendRow(['Country', 'Country Code', 'Year', 'Internet Users (%)', 'Fixed Broadband Subscriptions (per 100)', 'Mobile Cellular Subscriptions (per 100)', 'GDP per capita', 'Development_Group']);
  
  // Indicadores
  var indicators = {
    internetUsers: 'IT.NET.USER.ZS',
    fixedBroadband: 'IT.NET.BBND.P2',
    mobileCellular: 'IT.CEL.SETS.P2',
    gdpPerCapita: 'NY.GDP.PCAP.KD'
  };
  
  // Lista de países com seus grupos de desenvolvimento
  var countries = [
    // Países desenvolvidos
    ['United States', 'USA', 'Developed'], ['Japan', 'JPN', 'Developed'], ['Germany', 'DEU', 'Developed'], 
    ['United Kingdom', 'GBR', 'Developed'], ['Canada', 'CAN', 'Developed'],
    // Países em desenvolvimento
    ['China', 'CHN', 'Developing'], ['India', 'IND', 'Developing'], ['Brazil', 'BRA', 'Developing'], 
    ['Mexico', 'MEX', 'Developing'], ['Indonesia', 'IDN', 'Developing'],
    // Países menos desenvolvidos
    ['Bangladesh', 'BGD', 'Least Developed'], ['Ethiopia', 'ETH', 'Least Developed'], 
    ['Tanzania', 'TZA', 'Least Developed'], ['Uganda', 'UGA', 'Least Developed'], ['Nepal', 'NPL', 'Least Developed']
  ];
  
  // Anos para buscar
  var startYear = 2000;
  var endYear = 2020;
  
  for (var i = 0; i < countries.length; i++) {
    var country = countries[i][0];
    var countryCode = countries[i][1];
    var developmentGroup = countries[i][2];
    
    for (var year = startYear; year <= endYear; year++) {
      var row = [country, countryCode, year];
      
      for (var indicator in indicators) {
        var url = 'http://api.worldbank.org/v2/country/' + countryCode + '/indicator/' + indicators[indicator] + '?date=' + year + '&format=json';
        try {
          var response = UrlFetchApp.fetch(url);
          var json = JSON.parse(response.getContentText());
          
          if (json[1] && json[1][0] && json[1][0].value !== null) {
            row.push(json[1][0].value);
          } else {
            row.push('');
          }
        } catch (error) {
          console.log('Error fetching data for ' + country + ' in ' + year + ': ' + error);
          row.push('');
        }
      }
      
      // Adicionar o grupo de desenvolvimento à linha
      row.push(developmentGroup);
      
      sheet.appendRow(row);
    }
  }
}
