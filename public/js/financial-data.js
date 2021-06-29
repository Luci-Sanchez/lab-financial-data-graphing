axios
  .get("http://api.coindesk.com/v1/bpi/historical/close.json")
  .then((bitcoinValues) => {
    console.log("The response from API: ", bitcoinValues);
    const dailyValues = bitcoinValues.data.bpi;
    const bitcoinDates = Object.keys(dailyValues);
    const bitcoinPrices = bitcoinDates.map(date => dailyValues[date]);
   
    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: bitcoinDates,
        datasets: [
          {
            label: 'Price',
            backgroundColor: 'rgb(240, 174, 34)',
            borderColor: 'rgb(27, 25, 28)',
            borderWidth: 2,
            data: bitcoinPrices
          }
        ]
      }
    }); 
  })
  .catch(e => {
      console.error("Error while getting the data: ", e)
    });
