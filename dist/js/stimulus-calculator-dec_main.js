var calculator=new Vue({el:"#calculator",data:{income:"50,000",filingStatus:"single",children:0,totalAdult:"",totalChildren:"",totalStimulus:"",nothing:""},watch:{income:function(t){const i=t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");Vue.nextTick(()=>this.income=i)}},methods:{getResults:function(){this.totalStimulus=0,this.totalAdult=600,this.totalChilden=0,this.nothing=!1;let t=75e3,i=1,l=parseInt(this.income.replace(/,/g,""),10);"married"==this.filingStatus?(t=15e4,i=2):"head"==this.filingStatus&&(t=112500),this.totalChildren=600*this.children,this.totalAdult=this.totalAdult*i,this.totalStimulus=this.totalAdult+this.totalChildren,l>t&&(this.totalStimulus=this.totalStimulus-.05*(l-t)),this.totalStimulus<=0&&(this.nothing=!0),this.totalStimulus=this.totalStimulus.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}},mounted:function(){}});function limitNumber(){this.value.length>this.maxLength&&(this.value=this.value.slice(0,this.maxLength),type="number",maxlength="2")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiY2FsY3VsYXRvciIsIlZ1ZSIsImVsIiwiZGF0YSIsImluY29tZSIsImZpbGluZ1N0YXR1cyIsImNoaWxkcmVuIiwidG90YWxBZHVsdCIsInRvdGFsQ2hpbGRyZW4iLCJ0b3RhbFN0aW11bHVzIiwibm90aGluZyIsIndhdGNoIiwibmV3VmFsdWUiLCJyZXN1bHQiLCJyZXBsYWNlIiwibmV4dFRpY2siLCJ0aGlzIiwibWV0aG9kcyIsImdldFJlc3VsdHMiLCJ0b3RhbENoaWxkZW4iLCJtYXhGdWxsIiwibXVsdGlwbGllciIsImluY29tZUludCIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJtb3VudGVkIiwibGltaXROdW1iZXIiLCJ2YWx1ZSIsImxlbmd0aCIsIm1heExlbmd0aCIsInNsaWNlIiwidHlwZSIsIm1heGxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsV0FBQSxJQUFBQyxJQUFBLENBQ0FDLEdBQUEsY0FDQUMsS0FBQSxDQUNBQyxPQUFBLFNBQ0FDLGFBQUEsU0FDQUMsU0FBQSxFQUNBQyxXQUFBLEdBQ0FDLGNBQUEsR0FDQUMsY0FBQSxHQUNBQyxRQUFBLElBR0FDLE1BQUEsQ0FDQVAsT0FBQSxTQUFBUSxHQUNBLE1BQUFDLEVBQUFELEVBQUFFLFFBQUEsTUFBQSxJQUNBQSxRQUFBLHdCQUFBLEtBQ0FiLElBQUFjLFNBQUEsSUFBQUMsS0FBQVosT0FBQVMsS0FHQUksUUFBQSxDQUVBQyxXQUFBLFdBRUFGLEtBQUFQLGNBQUEsRUFDQU8sS0FBQVQsV0FBQSxJQUNBUyxLQUFBRyxhQUFBLEVBQ0FILEtBQUFOLFNBQUEsRUFFQSxJQUFBVSxFQUFBLEtBRUFDLEVBQUEsRUFDQUMsRUFBQUMsU0FBQVAsS0FBQSxPQUFBRixRQUFBLEtBQUEsSUFBQSxJQUVBLFdBQUFFLEtBQUFYLGNBQ0FlLEVBQUEsS0FDQUMsRUFBQSxHQUNBLFFBQUFMLEtBQUFYLGVBQ0FlLEVBQUEsUUFHQUosS0FBQVIsY0FBQSxJQUFBUSxLQUFBVixTQUNBVSxLQUFBVCxXQUFBUyxLQUFBVCxXQUFBYyxFQUVBTCxLQUFBUCxjQUFBTyxLQUFBVCxXQUFBUyxLQUFBUixjQUVBYyxFQUFBRixJQUNBSixLQUFBUCxjQUFBTyxLQUFBUCxjQUFBLEtBQUFhLEVBQUFGLElBR0FKLEtBQUFQLGVBQUEsSUFDQU8sS0FBQU4sU0FBQSxHQUdBTSxLQUFBUCxjQUFBTyxLQUFBUCxjQUFBZSxvQkFBQUMsRUFDQSxDQUFBQyxzQkFBQSxFQUFBQyxzQkFBQSxNQUlBQyxRQUFBLGVBS0EsU0FBQUMsY0FDQWIsS0FBQWMsTUFBQUMsT0FBQWYsS0FBQWdCLFlBQ0FoQixLQUFBYyxNQUFBZCxLQUFBYyxNQUFBRyxNQUFBLEVBQUFqQixLQUFBZ0IsV0FDQUUsS0FBQSxTQUNBQyxVQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FsY3VsYXRvciA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2NhbGN1bGF0b3InLFxuICAgIGRhdGE6IHtcbiAgICAgIGluY29tZTogJzUwLDAwMCcsXG4gICAgICBmaWxpbmdTdGF0dXM6J3NpbmdsZScsXG4gICAgICBjaGlsZHJlbjogMCxcbiAgICAgIHRvdGFsQWR1bHQ6ICcnLFxuICAgICAgdG90YWxDaGlsZHJlbjogJycsXG4gICAgICB0b3RhbFN0aW11bHVzOiAnJyxcbiAgICAgIG5vdGhpbmc6ICcnXG5cbiAgICB9LFxuICAgIHdhdGNoOiB7IFxuICAgICAgICBpbmNvbWU6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7IFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3VmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpIFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTsgXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soKCkgPT4gdGhpcy5pbmNvbWUgPSByZXN1bHQpOyBcbiAgICAgICAgfSwgXG4gICAgfSwgXG4gICAgbWV0aG9kczoge1xuICAgICAgLy8gZnVuY3Rpb25zIGdvIGhlcmVcbiAgICAgIGdldFJlc3VsdHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnRvdGFsU3RpbXVsdXMgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsQWR1bHQgPSA2MDA7XG4gICAgICAgIHRoaXMudG90YWxDaGlsZGVuID0gMDtcbiAgICAgICAgdGhpcy5ub3RoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1heEZ1bGwgPSA3NTAwMCxcbiAgICAgICAgICAgIG1heEFueSA9IDk5MDAwLFxuICAgICAgICAgICAgbXVsdGlwbGllciA9IDEsXG4gICAgICAgICAgICBpbmNvbWVJbnQgPSBwYXJzZUludCgodGhpcy5pbmNvbWUpLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmZpbGluZ1N0YXR1cyA9PSAnbWFycmllZCcpIHtcbiAgICAgICAgICAgIG1heEZ1bGwgPSAxNTAwMDA7XG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGluZ1N0YXR1cyA9PSAnaGVhZCcpIHtcbiAgICAgICAgICAgIG1heEZ1bGwgPSAxMTI1MDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdGFsQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKjYwMDtcbiAgICAgICAgdGhpcy50b3RhbEFkdWx0ID0gdGhpcy50b3RhbEFkdWx0Km11bHRpcGxpZXI7XG5cbiAgICAgICAgdGhpcy50b3RhbFN0aW11bHVzID0gdGhpcy50b3RhbEFkdWx0ICsgdGhpcy50b3RhbENoaWxkcmVuO1xuXG4gICAgICAgIGlmIChpbmNvbWVJbnQgPiBtYXhGdWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsU3RpbXVsdXMgPSB0aGlzLnRvdGFsU3RpbXVsdXMgLSAoaW5jb21lSW50IC0gbWF4RnVsbCkqLjA1O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG90YWxTdGltdWx1cyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGhpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3RhbFN0aW11bHVzID0gdGhpcy50b3RhbFN0aW11bHVzLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHsnbWluaW11bUZyYWN0aW9uRGlnaXRzJzowLCdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnOjB9KTtcblxuICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHRoaXMuZ2V0UmVzdWx0cygpXG4gICAgIH0sXG4gIH0pXG5cbiAgZnVuY3Rpb24gbGltaXROdW1iZXIgKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgICAgdHlwZSA9IFwibnVtYmVyXCJcbiAgICAgICAgbWF4bGVuZ3RoID0gXCIyXCJcbiAgICB9XG4gIH0iXX0=