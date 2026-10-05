const formatHelp='Enter a valid date in zero-padded MMDDYY format (for example 090526), MM/DD/YY, or MM-DD-YY.';

function calendarDate(month,day,year) {
 const check=new Date(Date.UTC(2000+Number(year),Number(month)-1,Number(day)));
 if(check.getUTCFullYear()!==2000+Number(year) || check.getUTCMonth()+1!==Number(month) || check.getUTCDate()!==Number(day))return null;
 return month.padStart(2,'0')+day.padStart(2,'0')+year;
}

export function normalizeRaffleDate(input) {
 if(typeof input!=='string')throw Error(formatHelp);
 const text=input.trim(),separated=/^(\d{1,2})([/-])(\d{1,2})\2(\d{2})$/.exec(text);
 const candidates=new Set();
 let requiresConfirmation=false;
 if(separated) {
  const [,month,,day,year]=separated;
  const value=calendarDate(month,day,year);if(value)candidates.add(value);
  requiresConfirmation=month.length!==2 || day.length!==2;
 } else if(/^\d{6}$/.test(text)) {
  const value=calendarDate(text.slice(0,2),text.slice(2,4),text.slice(4));if(value)candidates.add(value);
 } else if(/^\d{4,5}$/.test(text)) {
  requiresConfirmation=true;
  const year=text.slice(-2),monthDay=text.slice(0,-2);
  for(const monthLength of [1,2]) {
   const dayLength=monthDay.length-monthLength;if(dayLength<1 || dayLength>2)continue;
   const value=calendarDate(monthDay.slice(0,monthLength),monthDay.slice(monthLength),year);if(value)candidates.add(value);
  }
 }
 if(candidates.size>1)throw Error('The date is ambiguous. '+formatHelp);
 if(!candidates.size)throw Error(formatHelp);
 return {value:[...candidates][0],requiresConfirmation};
}
