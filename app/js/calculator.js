var calculator = new Vue({
    el: '#calculator',
    data: {
      income: '50,000',
      filingStatus:'single',
      children: 2,
      childrenOld: 0,
      totalChildren: '',
      totalChildrenOld: '',
      totalStimulus: '',
      nothing: '',
      other: '',
      monthlyPayment: '',
      taxCredit: ''

    },
    watch: { 
        income: function(newValue) { 
            const result = newValue.replace(/\D/g, "") 
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
            Vue.nextTick(() => this.income = result); 
        }, 
    }, 
    methods: {
      // functions go here
      getResults: function () {

        this.other = false;
        this.nothing = false;

        this.totalStimulus = 0;
        this.totalChilden = 0;
        this.totalChildenOld = 0;
        this.nothing = false;

        let maxFull = 75000,
            maxCap = 200000,
            incomeInt = parseInt((this.income).replace(/,/g, ""), 10),
            allChildren = this.children + this.childrenOld;
        
        if (this.filingStatus == 'married') {
            maxFull = 150000;
            maxCap = 400000;
        } else if (this.filingStatus == 'head') {
            maxFull = 112500;
        }

        this.totalChildren = this.children*3600;
        this.totalChildrenOld = this.childrenOld*3000;

        this.totalStimulus = this.totalChildren + this.totalChildrenOld;

        if (incomeInt > maxFull ) {
            this.totalStimulus = this.totalStimulus - (incomeInt - maxFull)*.05;
        } 


        if (this.totalStimulus <= 0 && incomeInt < maxCap) {
            this.totalStimulus = (allChildren)*2000;
            // this.other = true;   
        } else if (this.totalStimulus < (2000*allChildren) && this.totalStimulus > 0){
            this.totalStimulus = (allChildren)*2000;
        } else if (this.totalStimulus <= 0 && incomeInt >= maxCap) {
            console.log(this.totalStimulus);
            console.log(maxFull);
            console.log((incomeInt - maxCap)*.05);
            this.totalStimulus = (allChildren*2000) - ((incomeInt - maxCap)*.05);
            console.log(this.totalStimulus);
            // this.other = true;  
        }

        this.monthlyPayment = (this.totalStimulus)/12;
        this.taxCredit = (this.totalStimulus)/2;
        
        
        if (this.totalStimulus <= 0) {
            this.nothing = true;
        }

        this.totalStimulus = this.totalStimulus.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':2});

        this.monthlyPayment = this.monthlyPayment.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':2});

        this.taxCredit = this.taxCredit.toLocaleString(undefined,
            {'minimumFractionDigits':0,'maximumFractionDigits':2});

      },
    },
    mounted: function(){
        // this.getResults()
     },
  })

  function limitNumber () {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
        type = "number"
        maxlength = "2"
    }
  }