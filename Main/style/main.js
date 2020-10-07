function load(){
	var array = document.getElementsByName("region");
      array.forEach(function(item, i, array)
      {
      	var attr = GetFractionName(item.getAttribute('data'));
        if (attr.id == 0) item.style.fill = '#8B0000';
        if (attr.id == 1) item.style.fill = '#808000';
        if (attr.id == 4) item.style.fill = '#FFFF00';
        if (attr.id == 2) item.style.fill = '#4B0082';
        if (attr.id == 3) item.style.fill = '#FF0000';
        if (attr.name == "Лига Гномов") item.style.fill = '#C0C0C0';
        if (attr.name == "Герцогство Готэм") item.style.fill = '#000000';
        if (attr.name == "Герцогство Метрополис") item.style.fill = '#1E90FF';
        if (attr.name == "Королевство Кракеш") item.style.fill = '#F4A460';
        if (attr.name == "Империя Визло") item.style.fill = '#9400D3';
        if (attr.name == "Братство Маормеров") item.style.fill = '#696969';
        if (attr.name == "Морская Империя") item.style.fill = '#DC143C';
        if (attr.name == "Остров Фей") item.style.fill = '#C71585';
        if (attr.name == "Болотная Коммуна") item.style.fill = '#006400';
        if (attr.name == "Альдмерская Республика") item.style.fill = '#0000FF';
        if (attr.name == "Независимая Ваканда") item.style.fill = '#FF7F50';
      });
}
	function MakeClicker() {
    var classname = document.getElementsByClassName("region");
    load();
    var player = CheckPlayer();
    if (player != 0) { MakePlayerInfo(player);}
    else {
      alert("Неправильный логин");
    }
    for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
    }
    };
var myFunction = function() {
	    var prov = provinces[this.getAttribute("data")];
      MakeFraction(prov.owner, "fractionName", "fractionResourses");
      MakeIdeology(prov.owner, "fractionIdeology", "ideologyStat");
      MakeReligion(prov.owner, "fractionReligion", "religionStat");
      MakeAgents(prov.owner);
      var maker = document.getElementById("provinceName");
      maker.innerHTML = "Название провинции: " + prov.name;
      maker = document.getElementById("provinceDefence");
      maker.innerHTML = "Уровень укрепления: " + prov.defence;
      maker = document.getElementById("provinceCapitol");
      if (prov.capitol == "да") maker.innerHTML = "Cтолица государства";
      else maker.innerHTML = "";
      maker = document.getElementById("provinceTreasury");
      maker.innerHTML = "Сокровищница: " + prov.treasury;
      maker = document.getElementById("provinceCasern");
      maker.innerHTML = "Казарма: " + prov.casern;
      maker = document.getElementById("provinceChapel");
      maker.innerHTML = "Часовня: " + prov.chapel;
      };
function CheckPlayer()
{
  var login = document.getElementById("loginText");
  var password = document.getElementById("passwordText");
  var player = 0;
  for (var i = 0; i < players.length; i++) {
    if (players[i].login == login.value && Decrypt(players[i].password) == password.value)
      {
        login.style.display = "none";
        password.style.display = "none";
        var enter = document.getElementById("enterButton");
        enter.style.display = "none";
        return players[i];
      }
    }
    return player;
}
function MakePlayerInfo(idFraction)
{
  var frac = fractions[idFraction.fraction];
  MakeFraction(frac.id, "fractionNamePlayer", "fractionResoursesPlayer");
  MakeIdeology(frac.id, "fractionIdeologyPlayer", "ideologyStatPlayer");
  MakeReligion(frac.id, "fractionReligionPlayer", "religionStatPlayer");
  alert(idFraction.name + " " + frac.name);
  var maker = document.getElementById("militaryPlayer");
  maker.innerHTML="Военный опыт: " + frac.military;
  maker =document.getElementById("politicsPlayer");
  maker.innerHTML="Политическая власть: " + frac.politics;
  maker = document.getElementById("moralePlayer");
  maker.innerHTML = "Мораль: " + frac.morale;
  MakeAgentsPlayer(frac);
}
function MakeAgentsPlayer(frac)
{
  MakeAgentPlayer(agents[frac.warchief], "agentWarPlayer", "warHonor", "warVigor", "warCunning", "warFree");
  MakeAgentPlayer(agents[frac.diplomat], "agentDipPlayer", "dipHonor", "dipVigor", "dipCunning", "dipFree");
  MakeAgentPlayer(agents[frac.spy], "agentSpyPlayer", "spyHonor", "spyVigor", "spyCunning", "spyFree");
  MakeAgentPlayer(agents[frac.stewart], "agentStePlayer", "steHonor", "steVigor", "steCunning", "steFree");
  MakeAgentPlayer(agents[frac.warchief], "agentConfPlayer", "confHonor", "confVigor", "confCunning", "confFree");
}
function MakeAgentPlayer(agent, label, honor, vigor, cunning, exp)
{
  var maker = document.getElementById(label);
  maker.innerHTML = agent.type + ": " + agent.name;
  maker = document.getElementById(honor);
  maker.innerHTML = "Авторитет: " + agent.honor + " (" + agent.honorExp + "/" + (5*(agent.honor + 1)) + " опыта)";
  maker = document.getElementById(vigor);
  maker.innerHTML = "Рвение: " + agent.vigor + " (" + agent.vigorExp + "/" + (5*(agent.vigor + 1))+ " опыта)";
  maker = document.getElementById(cunning);
  maker.innerHTML = "Хитрость: " + agent.cunning + " (" + agent.cunningExp + "/" + (5*(agent.cunning + 1)) + " опыта)";
  maker = document.getElementById(exp);
  maker.innerHTML = "Свободный опыт: " + agent.Experience;
}
function GetFractionName(idGet)
{
	var idFr = provinces[idGet].owner;
	return fractions[idFr];
}
function MakeFraction(idGet, label, resourses)
{
  var frac = fractions[idGet];
  var maker = document.getElementById(label);
  maker.innerHTML = "Название фракции: " + frac.name;
  maker = document.getElementById(resourses);
  maker.innerHTML = "Сила армии: " + frac.army + ", Благосостояние " + frac.wealth;
}
function MakeIdeology(idGet, label, stat)
{
  var frac = fractions[idGet];
  var ideolog = ideologies[frac.ideology];
  var maker = document.getElementById(label);
  maker.innerHTML = "Идеология: " + ideolog.name;
  maker = document.getElementById(stat);
  maker.innerHTML = "Поддержка: " + frac.nationalizm + "Н, " + frac.kommunizm + "К, " + frac.monarchy + "М, " + frac.democracy + "Д";
}
function MakeReligion(idGet, label, stat)
{
  var frac = fractions[idGet];
  var relig = religions[frac.religion];
  var maker = document.getElementById(label);
  maker.innerHTML = "Религия: " + relig.name;
  maker = document.getElementById(stat);
  maker.innerHTML = "Поддержка: " + frac.fanatizm + "Ф, " + frac.pacifizm + "П, " + frac.pangolizm + "Я, " + frac.ateizm + "А";
}
function MakeAgents(idGet)
{
  var frac = fractions[idGet];
	var agent = agents[frac.warchief];
  MakeAgent(agent, "agentWar", "warStat");
  agent = agents[frac.diplomat];
  MakeAgent(agent, "agentDip", "dipStat");
	agent = agents[frac.spy];
  MakeAgent(agent, "agentSpy", "spyStat");
	agent = agents[frac.stewart];
  MakeAgent(agent, "agentSte", "steStat");
	agent = agents[frac.confessor];
  MakeAgent(agent, "agentConf", "confStat");
};
function MakeAgent(agent, idLabel, idStat)
{
  var maker = document.getElementById(idLabel);
  maker.innerHTML = agent.type + ": " + agent.name;
  maker = document.getElementById(idStat);
  maker.innerHTML = "Авторитет " + agent.honor + " , Рвение " + agent.vigor + " , Хитрость " + agent.cunning;
}



    
