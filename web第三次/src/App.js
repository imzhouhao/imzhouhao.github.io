import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    handle_and_addrow =(e)=>{
        var table=document.getElementById("myTable");
        var i=parseInt(table.rows.length);
        var name=document.getElementById("name");
        var ches=document.getElementById("Chinese");
        var math=document.getElementById("Math");
        var eng=document.getElementById("English");
        var his=document.getElementById("History");
        var newTr=table.insertRow();
        var newTd0 = newTr.insertCell();
        var newTd1 = newTr.insertCell();
        var newTd2 = newTr.insertCell();
        var newTd3 = newTr.insertCell();
        var newTd4 = newTr.insertCell();
        var newTd5 = newTr.insertCell();
        newTd0.innerHTML = '<input type="text" title="姓名"  />';
        newTd0.innerText=name.value;
        newTd1.innerHTML='<input type="number" id="Chinese"+(i-1) maxLength={5} title="语文"/>';
        newTd1.innerText=ches.value;
        newTd2.innerHTML='<input type="number" id="Math"+(i-1) maxLength={5} title="数学"/>';
        newTd2.innerText=math.value;
        newTd3.innerHTML='<input type="number" id="English"+(i-1) maxLength={5} title="英语"/>';
        newTd3.innerText=eng.value;
        newTd4.innerHTML='<input type="number" id="History"+(i-1) maxLength={5} title="历史"/>';
        newTd4.innerText=his.value;
        newTd5.innerHTML='<input type="number" id="Total"+(i-1) maxLength={5} title="总分"/>';
        newTd5.innerText=eval(`${ches.value}+${math.value}+${eng.value}+${his.value}`);
       /* name.value="0";
        ches.value=0;
        math.value=0;
        eng.value=0;
        his.value=0;*/
    }
  render() {
    return (
      <div className="App" style={{margin: '0 auto'}}>
          <table id="myTable" border={1}style={{textAlign: 'center'}}
          >
              <tr>
                  <th>姓名</th>
                  <th>语文</th>
                  <th>数学</th>
                  <th>英语</th>
                  <th>历史</th>
                  <th>总分</th>
              </tr>
              <tr>
                  <td><input type="text" id={"name"}  maxLength={5} title="姓名" /></td>
                  <td><input type="number" id={"Chinese"} maxLength={5} title="语文"/></td>
                  <td><input type="number"  id={"Math"}maxLength={5} title="数学"/></td>
                  <td><input type="number"  id={"English"}maxLength={5} title="英语"/></td>
                  <td><input type="number"  id={"History"}maxLength={5} title="历史"/></td>
                  <td><input type="number" id={"Total"}  maxLength={5} title="总分"/></td>
                  <td><button type="button" onClick={this.handle_and_addrow} >确认</button></td>
              </tr>
          </table>
      </div>
    );
  }

}

export default App;
