var calculator=new Vue({el:"#calculator",data:{income:"50,000",filingStatus:"single",children:0,totalAdult:"",totalChildren:"",totalStimulus:"",nothing:""},watch:{income:function(t){const i=t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");Vue.nextTick(()=>this.income=i)}},methods:{getResults:function(){this.totalStimulus=0,this.totalAdult=1400,this.totalChilden=0,this.nothing=!1;let t=75e3,i=5e3,l=1,s=parseInt(this.income.replace(/,/g,""),10);"married"==this.filingStatus?(t=15e4,i=1e4,l=2):"head"==this.filingStatus&&(t=112500,i=7500);let e=t+i;this.totalChildren=1400*this.children,this.totalAdult=this.totalAdult*l,this.totalStimulus=this.totalAdult+this.totalChildren,s>t&&s<=e?this.totalStimulus=(i-(s-t))*this.totalStimulus/i:s>e&&(this.totalStimulus=0),console.log(this.totalStimulus),this.totalStimulus<=0&&(this.nothing=!0),this.totalStimulus=this.totalStimulus.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2})}},mounted:function(){}});function limitNumber(){this.value.length>this.maxLength&&(this.value=this.value.slice(0,this.maxLength),type="number",maxlength="2")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiY2FsY3VsYXRvciIsIlZ1ZSIsImVsIiwiZGF0YSIsImluY29tZSIsImZpbGluZ1N0YXR1cyIsImNoaWxkcmVuIiwidG90YWxBZHVsdCIsInRvdGFsQ2hpbGRyZW4iLCJ0b3RhbFN0aW11bHVzIiwibm90aGluZyIsIndhdGNoIiwibmV3VmFsdWUiLCJyZXN1bHQiLCJyZXBsYWNlIiwibmV4dFRpY2siLCJ0aGlzIiwibWV0aG9kcyIsImdldFJlc3VsdHMiLCJ0b3RhbENoaWxkZW4iLCJtYXhGdWxsIiwibWF4Q2FwIiwibXVsdGlwbGllciIsImluY29tZUludCIsInBhcnNlSW50IiwibWF4SW5jb21lIiwiY29uc29sZSIsImxvZyIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibW91bnRlZCIsImxpbWl0TnVtYmVyIiwidmFsdWUiLCJsZW5ndGgiLCJtYXhMZW5ndGgiLCJzbGljZSIsInR5cGUiLCJtYXhsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLFdBQUEsSUFBQUMsSUFBQSxDQUNBQyxHQUFBLGNBQ0FDLEtBQUEsQ0FDQUMsT0FBQSxTQUNBQyxhQUFBLFNBQ0FDLFNBQUEsRUFDQUMsV0FBQSxHQUNBQyxjQUFBLEdBQ0FDLGNBQUEsR0FDQUMsUUFBQSxJQUdBQyxNQUFBLENBQ0FQLE9BQUEsU0FBQVEsR0FDQSxNQUFBQyxFQUFBRCxFQUFBRSxRQUFBLE1BQUEsSUFDQUEsUUFBQSx3QkFBQSxLQUNBYixJQUFBYyxTQUFBLElBQUFDLEtBQUFaLE9BQUFTLEtBR0FJLFFBQUEsQ0FFQUMsV0FBQSxXQUVBRixLQUFBUCxjQUFBLEVBQ0FPLEtBQUFULFdBQUEsS0FDQVMsS0FBQUcsYUFBQSxFQUNBSCxLQUFBTixTQUFBLEVBRUEsSUFBQVUsRUFBQSxLQUNBQyxFQUFBLElBQ0FDLEVBQUEsRUFDQUMsRUFBQUMsU0FBQVIsS0FBQSxPQUFBRixRQUFBLEtBQUEsSUFBQSxJQUVBLFdBQUFFLEtBQUFYLGNBQ0FlLEVBQUEsS0FDQUMsRUFBQSxJQUNBQyxFQUFBLEdBQ0EsUUFBQU4sS0FBQVgsZUFDQWUsRUFBQSxPQUNBQyxFQUFBLE1BR0EsSUFBQUksRUFBQUwsRUFBQUMsRUFFQUwsS0FBQVIsY0FBQSxLQUFBUSxLQUFBVixTQUNBVSxLQUFBVCxXQUFBUyxLQUFBVCxXQUFBZSxFQUVBTixLQUFBUCxjQUFBTyxLQUFBVCxXQUFBUyxLQUFBUixjQUVBZSxFQUFBSCxHQUFBRyxHQUFBRSxFQUNBVCxLQUFBUCxlQUFBWSxHQUFBRSxFQUFBSCxJQUFBSixLQUFBUCxjQUFBWSxFQUNBRSxFQUFBRSxJQUNBVCxLQUFBUCxjQUFBLEdBR0FpQixRQUFBQyxJQUFBWCxLQUFBUCxlQUVBTyxLQUFBUCxlQUFBLElBQ0FPLEtBQUFOLFNBQUEsR0FJQU0sS0FBQVAsY0FBQU8sS0FBQVAsY0FBQW1CLG9CQUFBQyxFQUNBLENBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLE1BSUFDLFFBQUEsZUFLQSxTQUFBQyxjQUNBakIsS0FBQWtCLE1BQUFDLE9BQUFuQixLQUFBb0IsWUFDQXBCLEtBQUFrQixNQUFBbEIsS0FBQWtCLE1BQUFHLE1BQUEsRUFBQXJCLEtBQUFvQixXQUNBRSxLQUFBLFNBQ0FDLFVBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjYWxjdWxhdG9yID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjY2FsY3VsYXRvcicsXG4gICAgZGF0YToge1xuICAgICAgaW5jb21lOiAnNTAsMDAwJyxcbiAgICAgIGZpbGluZ1N0YXR1czonc2luZ2xlJyxcbiAgICAgIGNoaWxkcmVuOiAwLFxuICAgICAgdG90YWxBZHVsdDogJycsXG4gICAgICB0b3RhbENoaWxkcmVuOiAnJyxcbiAgICAgIHRvdGFsU3RpbXVsdXM6ICcnLFxuICAgICAgbm90aGluZzogJydcblxuICAgIH0sXG4gICAgd2F0Y2g6IHsgXG4gICAgICAgIGluY29tZTogZnVuY3Rpb24obmV3VmFsdWUpIHsgXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXdWYWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIikgXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpOyBcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygoKSA9PiB0aGlzLmluY29tZSA9IHJlc3VsdCk7IFxuICAgICAgICB9LCBcbiAgICB9LCBcbiAgICBtZXRob2RzOiB7XG4gICAgICAvLyBmdW5jdGlvbnMgZ28gaGVyZVxuICAgICAgZ2V0UmVzdWx0czogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudG90YWxTdGltdWx1cyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxBZHVsdCA9IDE0MDA7XG4gICAgICAgIHRoaXMudG90YWxDaGlsZGVuID0gMDtcbiAgICAgICAgdGhpcy5ub3RoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1heEZ1bGwgPSA3NTAwMCxcbiAgICAgICAgICAgIG1heENhcCA9IDUwMDAsXG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gMSxcbiAgICAgICAgICAgIGluY29tZUludCA9IHBhcnNlSW50KCh0aGlzLmluY29tZSkucmVwbGFjZSgvLC9nLCBcIlwiKSwgMTApO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZmlsaW5nU3RhdHVzID09ICdtYXJyaWVkJykge1xuICAgICAgICAgICAgbWF4RnVsbCA9IDE1MDAwMDtcbiAgICAgICAgICAgIG1heENhcCA9IDEwMDAwO1xuICAgICAgICAgICAgbXVsdGlwbGllciA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxpbmdTdGF0dXMgPT0gJ2hlYWQnKSB7XG4gICAgICAgICAgICBtYXhGdWxsID0gMTEyNTAwO1xuICAgICAgICAgICAgbWF4Q2FwID0gNzUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXhJbmNvbWUgPSBtYXhGdWxsICsgbWF4Q2FwO1xuXG4gICAgICAgIHRoaXMudG90YWxDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4qMTQwMDtcbiAgICAgICAgdGhpcy50b3RhbEFkdWx0ID0gdGhpcy50b3RhbEFkdWx0Km11bHRpcGxpZXI7XG5cbiAgICAgICAgdGhpcy50b3RhbFN0aW11bHVzID0gdGhpcy50b3RhbEFkdWx0ICsgdGhpcy50b3RhbENoaWxkcmVuO1xuXG4gICAgICAgIGlmIChpbmNvbWVJbnQgPiBtYXhGdWxsICYmIGluY29tZUludCA8PSBtYXhJbmNvbWUpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGltdWx1cyA9ICgobWF4Q2FwIC0gKGluY29tZUludCAtIG1heEZ1bGwpKSp0aGlzLnRvdGFsU3RpbXVsdXMpL21heENhcDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmNvbWVJbnQgPiBtYXhJbmNvbWUpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGltdWx1cyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvdGFsU3RpbXVsdXMpXG5cbiAgICAgICAgaWYgKHRoaXMudG90YWxTdGltdWx1cyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGhpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnRvdGFsU3RpbXVsdXMgPSB0aGlzLnRvdGFsU3RpbXVsdXMudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgeydtaW5pbXVtRnJhY3Rpb25EaWdpdHMnOjAsJ21heGltdW1GcmFjdGlvbkRpZ2l0cyc6Mn0pO1xuXG4gICAgICB9LFxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdGhpcy5nZXRSZXN1bHRzKClcbiAgICAgfSxcbiAgfSlcblxuICBmdW5jdGlvbiBsaW1pdE51bWJlciAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgdGhpcy5tYXhMZW5ndGgpO1xuICAgICAgICB0eXBlID0gXCJudW1iZXJcIlxuICAgICAgICBtYXhsZW5ndGggPSBcIjJcIlxuICAgIH1cbiAgfSJdfQ==