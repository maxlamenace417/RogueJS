function SetRogue(){
	var helmet = document.getElementById('helmet');
	helmet.setAttribute("src","ressources/images/default/helmets_rogue.png");
	var bracelet1 = document.getElementById('bracelet1');
	bracelet1.setAttribute("src","ressources/images/default/bracelets_rogue.png");
	var armor = document.getElementById('armor');
	armor.setAttribute("src","ressources/images/default/armors_rogue.png");
	var bracelet2 = document.getElementById('bracelet2');
	bracelet2.setAttribute("src","ressources/images/default/bracelets_rogue.png");
	var weapon = document.getElementById('weapon');
	weapon.setAttribute("src","ressources/images/default/weapons_rogue.png");
	var belt = document.getElementById('belt');
	belt.setAttribute("src","ressources/images/default/belts_rogue.png");
	var gloves = document.getElementById('gloves');
	gloves.setAttribute("src","ressources/images/default/gloves_rogue.png");
	var pants = document.getElementById('pants');
	pants.setAttribute("src","ressources/images/default/pants_rogue.png");
	var boots = document.getElementById('boots');
	boots.setAttribute("src","ressources/images/default/boots_rogue.png");
}
function SetWarrior(){
	var helmet = document.getElementById('helmet');
	helmet.setAttribute("src","ressources/images/default/helmets_warrior.png");
	var bracelet1 = document.getElementById('bracelet1');
	bracelet1.setAttribute("src","ressources/images/default/bracelets_warrior.png");
	var armor = document.getElementById('armor');
	armor.setAttribute("src","ressources/images/default/armors_warrior.png");
	var bracelet2 = document.getElementById('bracelet2');
	bracelet2.setAttribute("src","ressources/images/default/bracelets_warrior.png");
	var weapon = document.getElementById('weapon');
	weapon.setAttribute("src","ressources/images/default/weapons_warrior.png");
	var belt = document.getElementById('belt');
	belt.setAttribute("src","ressources/images/default/belts_warrior.png");
	var gloves = document.getElementById('gloves');
	gloves.setAttribute("src","ressources/images/default/gloves_warrior.png");
	var pants = document.getElementById('pants');
	pants.setAttribute("src","ressources/images/default/pants_warrior.png");
	var boots = document.getElementById('boots');
	boots.setAttribute("src","ressources/images/default/boots_warrior.png");
}
function SetMagus(){
	var helmet = document.getElementById('helmet');
	helmet.setAttribute("src","ressources/images/default/helmets_magus.png");
	var bracelet1 = document.getElementById('bracelet1');
	bracelet1.setAttribute("src","ressources/images/default/bracelets_magus.png");
	var armor = document.getElementById('armor');
	armor.setAttribute("src","ressources/images/default/armors_magus.png");
	var bracelet2 = document.getElementById('bracelet2');
	bracelet2.setAttribute("src","ressources/images/default/bracelets_magus.png");
	var weapon = document.getElementById('weapon');
	weapon.setAttribute("src","ressources/images/default/weapons_magus.png");
	var belt = document.getElementById('belt');
	belt.setAttribute("src","ressources/images/default/belts_magus.png");
	var gloves = document.getElementById('gloves');
	gloves.setAttribute("src","ressources/images/default/gloves_magus.png");
	var pants = document.getElementById('pants');
	pants.setAttribute("src","ressources/images/default/pants_magus.png");
	var boots = document.getElementById('boots');
	boots.setAttribute("src","ressources/images/default/boots_magus.png");
}

function init_hoverboxes(){
	var helmet_info = document.getElementById('helmet_info');
	var bracelet1_info = document.getElementById('bracelet1_info');
	var armor_info = document.getElementById('armor_info');
	var bracelet2_info = document.getElementById('bracelet2_info');
	var weapon_info = document.getElementById('weapon_info');
	var belt_info = document.getElementById('belt_info');
	var gloves_info = document.getElementById('gloves_info');
	var pants_info = document.getElementById('pants_info');
	var boots_info = document.getElementById('boots_info');
	window.onmousemove = function (e) {
		var x = e.clientX,y = e.clientY;
		helmet_info.style.top = (y + 20) + 'px';
		helmet_info.style.left = (x + 20) + 'px';
		bracelet1_info.style.top = (y + 20) + 'px';
		bracelet1_info.style.left = (x + 20) + 'px';
		armor_info.style.top = (y + 20) + 'px';
		armor_info.style.left = (x + 20) + 'px';
		bracelet2_info.style.top = (y + 20) + 'px';
		bracelet2_info.style.left = (x + 20) + 'px';
		weapon_info.style.top = (y + 20) + 'px';
		weapon_info.style.left = (x + 20) + 'px';
		belt_info.style.top = (y + 20) + 'px';
		belt_info.style.left = (x + 20) + 'px';
		gloves_info.style.top = (y + 20) + 'px';
		gloves_info.style.left = (x + 20) + 'px';
		pants_info.style.top = (y + 20) + 'px';
		pants_info.style.left = (x + 20) + 'px';
		boots_info.style.top = (y + 20) + 'px';
		boots_info.style.left = (x + 20) + 'px';
	};
}
function init_default_values(){
	coins_default = 0;
	diamonds_default = 0;
	diamond_cost_magic = 1;
	diamond_cost_magic_damage = 5;
	diamond_cost_strength = 1;
	diamond_cost_strength_damage = 5;
	diamond_cost_dexterity = 1;
	diamond_cost_dexterity_damage = 5;
	diamond_cost_poison = 10;
	diamond_cost_vampirism = 10;
	diamond_cost_gold = 10;
	diamond_cost_affinity = 100;
	diamond_cost_life = 1;
	_life = "_life";
	_reallife = "_reallife";
	_magic = "_magic";
	_strength = "_strength";
	_dexterity= "_dexterity";
	_critical_chance= "_critical_chance";
	_damage_reduction_magic= "_damage_reduction_magic";
	_damage_reduction_magic_percent= "_damage_reduction_magic_percent";
	_damage_reduction_strength= "_damage_reduction_strength";
	_damage_reduction_strength_percent= "_damage_reduction_strength_percent";
	_damage_reduction_dexterity= "_damage_reduction_dexterity";
	_damage_reduction_dexterity_percent= "_damage_reduction_dexterity_percent";
	_parade_chance= "_parade_chance";
	_return_percent= "_return_percent";
	_damage_increase_magic= "_damage_increase_magic";
	_damage_increase_strength= "_damage_increase_strength";
	_damage_increase_dexterity= "_damage_increase_dexterity";
	_poison= "_poison";
	_vampirism= "_vampirism";
	_gold= "_gold";
	_affinity= "_affinity";
	_helmet = "_helmet";
	_bracelet = "_bracelet";
	_belt = "_belt";
	_armor = "_armor";
	_pants = "_pants";
	_boots = "_boots";
	_gloves = "_gloves";
	_weapon = "_weapon";
	_red = "_red";
	_orange = "_orange";
	_yellow = "_yellow";
	_green = "_green";
	_blue = "_blue";
	_white = "_white";
	_black = "_black";
	_purple = "_purple";
	_pink = "_pink";
	affinities = ["magic","warrior","rogue","neutral"];
	attack_types = ["magic","strength","dexterity"];
	effect_types = ["return","critical","parade"];
	IsFirstTurn = true;
	_diamond_shop ="_diamond_shop";
	_heal_shop ="_heal_shop";
	_poison_shop ="_poison_shop";
	_coins_shop ="_coins_shop";
	_hit_shop ="_hit_shop";
	_diamond_shop_cost = 10;
	_heal_shop_cost = 10;
	_poison_shop_cost = 10;
	_coins_shop_cost = 1;
	_hit_shop_cost = 2;
}
function init_coins(){
	coins = coins_default;
	diamonds = diamonds_default;
	var coins_count = document.getElementById('coins_count');
	var diamonds_count = document.getElementById('diamonds_count');
	coins_count.innerHTML=coins;
	diamonds_count.innerHTML=diamonds;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Return quotient of a/b
function GetQuotient(a,b){
	return (a-a%b)/b;
}

function GetDiamondCost(stat_name, character){
	var cost=0;
	switch(stat_name){
		case _life:
			cost = (GetQuotient(character.life,100)+1)*diamond_cost_life;
			break;
		case _magic:
			cost = (GetQuotient(character.magic,100)+1)*diamond_cost_magic;
			break;
		case _strength:
			cost = (GetQuotient(character.strength,100)+1)*diamond_cost_strength;
			break;
		case _dexterity:
			cost = (GetQuotient(character.dexterity,100)+1)*diamond_cost_dexterity;
			break;
		case _damage_increase_magic:
			cost = character.damage_increase_magic*5;
			break;
		case _damage_increase_strength:
			cost = character.damage_increase_strength*5;
			break;
		case _damage_increase_dexterity:
			cost = character.damage_increase_dexterity*5;
			break;
		case _poison:
			cost = (character.poison+1)*10;
			break;
		case _vampirism:
			cost = (character.vampirism+1)*6;
			break;
		case _gold:
			cost = (character.gold+1)*3;
			break;
	}
	return cost;
}

function UpgradeStat(stat_name,character){
	switch(stat_name){
		case _life:
			character.life++;
			break;
		case _magic:
			character.magic++;
			break;
		case _strength:
			character.strength++;
			break;
		case _dexterity:
			character.dexterity++;
			break;
		case _damage_increase_magic:
			character.damage_increase_magic++;
			break;
		case _damage_increase_strength:
			character.damage_increase_strength++;
			break;
		case _damage_increase_dexterity:
			character.damage_increase_dexterity++;
			break;
		case _poison:
			character.poison++;
			break;
		case _vampirism:
			character.vampirism++;
			break;
		case _gold:
			character.gold++;
			break;
	}
}

function BuyStat(stat_name,number){
	var cost=GetDiamondCost(stat_name, character);
	if(cost>0){
		for(var i = 0; i < number; i++) {
			if(diamonds>=cost){
				UpgradeStat(stat_name,character);
				diamonds = diamonds - cost;
				cost=GetDiamondCost(stat_name, character);
			}else{
				break;
			}
		}
		RefreshDiamonds();
		RefreshCharacterStats();
		RefreshStatsCosts();
	}
}
function BuyStats(stat_name){
	var cost=GetDiamondCost(stat_name, character);
	if(cost>0){
		while(diamonds>=cost){
			UpgradeStat(stat_name,character);
			diamonds = diamonds - cost;
			cost=GetDiamondCost(stat_name, character);
		}
		RefreshDiamonds();
		RefreshCharacterStats();
		RefreshStatsCosts();
	}
}
function BuyShop(shop_product,number){
	var end = false;
	for(var i=0;i<number;i++){
		if(end)
			break;
		switch(shop_product){
			case _diamond_shop:
				if(coins>=_diamond_shop_cost){
					diamonds = diamonds +1;
					coins=coins-_diamond_shop_cost;
				}else{
					end=true;
				}
				break;
			case _heal_shop:
				if(coins>=_heal_shop_cost && character.getAllStats(_life)>character.reallife){
					character.IncreaseLife(1+Math.round((character.getAllStats(_life)-character.reallife)*0.5));
					coins=coins-_heal_shop_cost;
				}else{
					end=true;
				}
				break;
			case _poison_shop:
				if(coins>=_poison_shop_cost && character.poisoned>0){
					character.ReducePoisoned(1+Math.round(character.poisoned*0.5));
					coins=coins-_poison_shop_cost;
				}else{
					end=true;
				}
				break;
			case _coins_shop:
				if(diamonds>=_coins_shop_cost){
					coins=coins+5;
					diamonds=diamonds-_coins_shop_cost;
				}else{
					end=true;
				}
				break;
			case _hit_shop:
				if(character.reallife>_hit_shop_cost){
					character.ReduceLife(_hit_shop_cost);
					mob.ReduceLife(1);
					if(mob.IsDead()){
						end=true;
						PlayerWin();
					}
				}else{
					end=true;
				}
				break;
		}
	}
	RefreshCoins();
	RefreshCharacterStats();
	RefreshDiamonds();
	RefreshMobStats();
	RefreshMobLifeBar();
	RefreshPlayerLifeBar();
}
function BuyShops(shop_product){
	var end = false;
	while(!end){
		if(end)
			break;
		switch(shop_product){
			case _diamond_shop:
				if(coins>=_diamond_shop_cost){
					diamonds = diamonds +1;
					coins=coins-_diamond_shop_cost;
				}else{
					end=true;
				}
				break;
			case _heal_shop:
				if(coins>=_heal_shop_cost && character.getAllStats(_life)>character.reallife){
					character.IncreaseLife(1+Math.round((character.getAllStats(_life)-character.reallife)*0.5));
					coins=coins-_heal_shop_cost;
				}else{
					end=true;
				}
				break;
			case _poison_shop:
				if(coins>=_poison_shop_cost && character.poisoned>0){
					character.ReducePoisoned(1+Math.round(character.poisoned*0.5));
					coins=coins-_poison_shop_cost;
				}else{
					end=true;
				}
				break;
			case _coins_shop:
				if(diamonds>=_coins_shop_cost){
					coins=coins+5;
					diamonds=diamonds-_coins_shop_cost;
				}else{
					end=true;
				}
				break;
			case _hit_shop:
				if(character.reallife>_hit_shop_cost){
					character.ReduceLife(_hit_shop_cost);
					mob.ReduceLife(1);
					if(mob.IsDead()){
						end=true;
						PlayerWin();
					}
				}else{
					end=true;
				}
				break;
		}
	}
	RefreshCoins();
	RefreshCharacterStats();
	RefreshDiamonds();
	RefreshMobStats();
	RefreshMobLifeBar();
	RefreshPlayerLifeBar();
}

function RefreshDiamonds(){
	var diamonds_count = document.getElementById('diamonds_count');
	diamonds_count.innerHTML=diamonds;
}
function RefreshCoins(){
	var coins_count = document.getElementById('coins_count');
	coins_count.innerHTML=coins;
}
function RefreshStatsCosts(){
	var _life_stat = GetDiamondCost(_life, character);
	var _life_stat_cost = document.getElementById('_life_stat_cost');
	_life_stat_cost.innerHTML=_life_stat;
	
	var _magic_stat = GetDiamondCost(_magic, character);
	var _magic_stat_cost = document.getElementById('_magic_stat_cost');
	_magic_stat_cost.innerHTML=_magic_stat;
	
	var _strength_stat = GetDiamondCost(_strength, character);
	var _strength_stat_cost = document.getElementById('_strength_stat_cost');
	_strength_stat_cost.innerHTML=_strength_stat;
	
	var _dexterity_stat = GetDiamondCost(_dexterity, character);
	var _dexterity_stat_cost = document.getElementById('_dexterity_stat_cost');
	_dexterity_stat_cost.innerHTML=_dexterity_stat;
	
	var _damage_increase_magic_stat = GetDiamondCost(_damage_increase_magic, character);
	var _damage_increase_magic_stat_cost = document.getElementById('_damage_increase_magic_stat_cost');
	_damage_increase_magic_stat_cost.innerHTML=_damage_increase_magic_stat;
	
	var _damage_increase_strength_stat = GetDiamondCost(_damage_increase_strength, character);
	var _damage_increase_strength_stat_cost = document.getElementById('_damage_increase_strength_stat_cost');
	_damage_increase_strength_stat_cost.innerHTML=_damage_increase_strength_stat;
	
	var _damage_increase_dexterity_stat = GetDiamondCost(_damage_increase_dexterity, character);
	var _damage_increase_dexterity_stat_cost = document.getElementById('_damage_increase_dexterity_stat_cost');
	_damage_increase_dexterity_stat_cost.innerHTML=_damage_increase_dexterity_stat;
	
	var _poison_stat = GetDiamondCost(_poison, character);
	var _poison_stat_cost = document.getElementById('_poison_stat_cost');
	_poison_stat_cost.innerHTML=_poison_stat;
	
	var _vampirism_stat = GetDiamondCost(_vampirism, character);
	var _vampirism_stat_cost = document.getElementById('_vampirism_stat_cost');
	_vampirism_stat_cost.innerHTML=_vampirism_stat;
	
	var _gold_stat = GetDiamondCost(_gold, character);
	var _gold_stat_cost = document.getElementById('_gold_stat_cost');
	_gold_stat_cost.innerHTML=_gold_stat;	
}
function init_shop(){
	var diamond_shop_cost = document.getElementById('_diamond_shop_cost');
	diamond_shop_cost.innerHTML=_diamond_shop_cost;
	var heal_shop_cost = document.getElementById('_heal_shop_cost');
	heal_shop_cost.innerHTML=_heal_shop_cost;
	var poison_shop_cost = document.getElementById('_poison_shop_cost');
	poison_shop_cost.innerHTML=_poison_shop_cost;
	var coins_shop_cost = document.getElementById('_coins_shop_cost');
	coins_shop_cost.innerHTML=_coins_shop_cost;
	var hit_shop_cost = document.getElementById('_hit_shop_cost');
	hit_shop_cost.innerHTML=_hit_shop_cost;
}
function RefreshCharacterStats(){
	character.RecalculateStats();
	var _reallife_stat = document.getElementById('_reallife_stat');
	_reallife_stat.innerHTML=character.reallife;
	var _life_stat = document.getElementById('_life_stat');
	_life_stat.innerHTML=character.getAllStats(_life);
	var _life_stat_character = document.getElementById('_life_stat_character');
	_life_stat_character.innerHTML=character.life;
	var _life_stat_stuffs = document.getElementById('_life_stat_stuffs');
	_life_stat_stuffs.innerHTML=character.getSutffStats(_life);
	
	var _magic_stat = document.getElementById('_magic_stat');
	_magic_stat.innerHTML=character.getAllStats(_magic);
	var _magic_stat_character = document.getElementById('_magic_stat_character');
	_magic_stat_character.innerHTML=character.magic;
	var _magic_stat_stuffs = document.getElementById('_magic_stat_stuffs');
	_magic_stat_stuffs.innerHTML=character.getSutffStats(_magic);
	
	var _strength_stat = document.getElementById('_strength_stat');
	_strength_stat.innerHTML=character.getAllStats(_strength);
	var _strength_stat_character = document.getElementById('_strength_stat_character');
	_strength_stat_character.innerHTML=character.strength;
	var _strength_stat_stuffs = document.getElementById('_strength_stat_stuffs');
	_strength_stat_stuffs.innerHTML=character.getSutffStats(_strength);
	
	var _dexterity_stat = document.getElementById('_dexterity_stat');
	_dexterity_stat.innerHTML=character.getAllStats(_dexterity);
	var _dexterity_stat_character = document.getElementById('_dexterity_stat_character');
	_dexterity_stat_character.innerHTML=character.dexterity;
	var _dexterity_stat_stuffs = document.getElementById('_dexterity_stat_stuffs');
	_dexterity_stat_stuffs.innerHTML=character.getSutffStats(_dexterity);
	
	var _damage_increase_magic_stat = document.getElementById('_damage_increase_magic_stat');
	_damage_increase_magic_stat.innerHTML=character.getAllStats(_damage_increase_magic);
	var _damage_increase_magic_stat_character = document.getElementById('_damage_increase_magic_stat_character');
	_damage_increase_magic_stat_character.innerHTML=character.damage_increase_magic;
	var _damage_increase_magic_stat_stuffs = document.getElementById('_damage_increase_magic_stat_stuffs');
	_damage_increase_magic_stat_stuffs.innerHTML=character.getSutffStats(_damage_increase_magic);
	
	var _damage_reduction_magic_stat = document.getElementById('_damage_reduction_magic_stat');
	_damage_reduction_magic_stat.innerHTML=character.getAllStats(_damage_reduction_magic);
	
	var _damage_reduction_magic_percent_stat = document.getElementById('_damage_reduction_magic_percent_stat');
	_damage_reduction_magic_percent_stat.innerHTML=character.getAllStats(_damage_reduction_magic_percent);
	
	var _damage_increase_strength_stat = document.getElementById('_damage_increase_strength_stat');
	_damage_increase_strength_stat.innerHTML=character.getAllStats(_damage_increase_strength);
	var _damage_increase_strength_stat_character = document.getElementById('_damage_increase_strength_stat_character');
	_damage_increase_strength_stat_character.innerHTML=character.damage_increase_strength;
	var _damage_increase_strength_stat_stuffs = document.getElementById('_damage_increase_strength_stat_stuffs');
	_damage_increase_strength_stat_stuffs.innerHTML=character.getSutffStats(_damage_increase_strength);
	
	var _damage_reduction_strength_stat = document.getElementById('_damage_reduction_strength_stat');
	_damage_reduction_strength_stat.innerHTML=character.getAllStats(_damage_reduction_strength);
	
	var _damage_reduction_strength_percent_stat = document.getElementById('_damage_reduction_strength_percent_stat');
	_damage_reduction_strength_percent_stat.innerHTML=character.getAllStats(_damage_reduction_strength_percent);
	
	var _damage_increase_dexterity_stat = document.getElementById('_damage_increase_dexterity_stat');
	_damage_increase_dexterity_stat.innerHTML=character.getAllStats(_damage_increase_dexterity);
	var _damage_increase_dexterity_stat_character = document.getElementById('_damage_increase_dexterity_stat_character');
	_damage_increase_dexterity_stat_character.innerHTML=character.damage_increase_dexterity;
	var _damage_increase_dexterity_stat_stuffs = document.getElementById('_damage_increase_dexterity_stat_stuffs');
	_damage_increase_dexterity_stat_stuffs.innerHTML=character.getSutffStats(_damage_increase_dexterity);
	
	var _damage_reduction_dexterity_stat = document.getElementById('_damage_reduction_dexterity_stat');
	_damage_reduction_dexterity_stat.innerHTML=character.getAllStats(_damage_reduction_dexterity);
	
	var _damage_reduction_dexterity_percent_stat = document.getElementById('_damage_reduction_dexterity_percent_stat');
	_damage_reduction_dexterity_percent_stat.innerHTML=character.getAllStats(_damage_reduction_dexterity_percent);
	
	var _return_percent_stat = document.getElementById('_return_percent_stat');
	_return_percent_stat.innerHTML=character.getAllStats(_return_percent);
	
	var _critical_chance_stat = document.getElementById('_critical_chance_stat');
	_critical_chance_stat.innerHTML=character.getAllStats(_critical_chance);
	
	var _parade_chance_stat = document.getElementById('_parade_chance_stat');
	_parade_chance_stat.innerHTML=character.getAllStats(_parade_chance);
	
	var _poison_stat = document.getElementById('_poison_stat');
	_poison_stat.innerHTML=character.getAllStats(_poison);
	var _poison_stat_character = document.getElementById('_poison_stat_character');
	_poison_stat_character.innerHTML=character.poison;
	var _poison_stat_stuffs = document.getElementById('_poison_stat_stuffs');
	_poison_stat_stuffs.innerHTML=character.getSutffStats(_poison);
	var _poisoned_stat = document.getElementById('_poisoned_stat');
	_poisoned_stat.innerHTML=character.poisoned;
	
	var _vampirism_stat = document.getElementById('_vampirism_stat');
	_vampirism_stat.innerHTML=character.getAllStats(_vampirism);
	var _vampirism_stat_character = document.getElementById('_vampirism_stat_character');
	_vampirism_stat_character.innerHTML=character.vampirism;
	var _vampirism_stat_stuffs = document.getElementById('_vampirism_stat_stuffs');
	_vampirism_stat_stuffs.innerHTML=character.getSutffStats(_vampirism);
	
	var _gold_stat = document.getElementById('_gold_stat');
	_gold_stat.innerHTML=character.getAllStats(_gold);
	var _gold_stat_character = document.getElementById('_gold_stat_character');
	_gold_stat_character.innerHTML=character.gold;
	var _gold_stat_stuffs = document.getElementById('_gold_stat_stuffs');
	_gold_stat_stuffs.innerHTML=character.getSutffStats(_gold);
	
}

class stats{
	life;
	magic;
	strength;
	dexterity;
	damage_reduction_magic;
	damage_reduction_strength;
	damage_reduction_dexterity;
	damage_increase_magic;
	damage_increase_strength;
	damage_increase_dexterity;
	poison;
	vampirism;
	gold;
	affinity;//0: magic, 1: warrior, 2: rogue, 3: neutral
	constructor(){
		this.life=0;
		this.magic=0;
		this.strength=0;
		this.dexterity=0;
		this.damage_reduction_magic=0;
		this.damage_reduction_strength=0;
		this.damage_reduction_dexterity=0;
		this.damage_increase_magic=0;
		this.damage_increase_strength=0;
		this.damage_increase_dexterity=0;
		this.poison=0;
		this.vampirism=0;
		this.gold=0;
		this.affinity=getRndInteger(0, 2);
	}
	Reinit(){
		this.life=0;
		this.magic=0;
		this.strength=0;
		this.dexterity=0;
		this.damage_reduction_magic=0;
		this.damage_reduction_strength=0;
		this.damage_reduction_dexterity=0;
		this.damage_increase_magic=0;
		this.damage_increase_strength=0;
		this.damage_increase_dexterity=0;
		this.poison=0;
		this.vampirism=0;
		this.gold=0;
		this.affinity=getRndInteger(0, 2);
	}
	ReinitFromObject(object){
		this.life=object.life;
		this.magic=object.magic;
		this.strength=object.strength;
		this.dexterity=object.dexterity;
		this.damage_reduction_magic=object.damage_reduction_magic;
		this.damage_reduction_strength=object.damage_reduction_strength;
		this.damage_reduction_dexterity=object.damage_reduction_dexterity;
		this.damage_increase_magic=object.damage_increase_magic;
		this.damage_increase_strength=object.damage_increase_strength;
		this.damage_increase_dexterity=object.damage_increase_dexterity;
		this.poison=object.poison;
		this.vampirism=object.vampirism;
		this.gold=object.gold;
		this.affinity=object.affinity;
	}
}
class stuff extends stats{
	type;
	color;	
	constructor(type, color){
		super();
		this.type=type;
		this.color=color;
	}
	ReinitFromObject(object){
		super.ReinitFromObject(object);
		this.type=object.type;
		this.color=object.color;
	}
	getStat(stat_name,affinity){
		var mult = 1;
		if(affinity==this.affinity){
			mult = 2;
		}
		switch(stat_name){
			case _life:
				return this.life*mult;
			case _magic:
				return this.magic*mult;
			case _strength:
				return this.strength*mult;
			case _dexterity:
				return this.dexterity*mult;
			case _damage_reduction_magic:
				return this.damage_reduction_magic*mult;
			case _damage_reduction_strength:
				return this.damage_reduction_strength*mult;
			case _damage_reduction_dexterity:
				return this.damage_reduction_dexterity*mult;
			case _damage_increase_magic:
				return this.damage_increase_magic*mult;
			case _damage_increase_strength:
				return this.damage_increase_strength*mult;
			case _damage_increase_dexterity:
				return this.damage_increase_dexterity*mult;
			case _poison:
				return this.poison*mult;
			case _vampirism:
				return this.vampirism*mult;
			case _gold:
				return this.gold*mult;
		}
	}
}
class weapon_spell extends stuff{
	damage_lines;
	heal_lines;
	constructor(type, color){
		super(type, color);
		this.damage_lines=[];
		this.heal_lines=[];
	}
}
class character extends stats{
	helmet;
	bracelet1;
	armor;
	bracelet2;
	weapon;
	belt;
	gloves;
	pants;
	boots;
	critical_chance;
	damage_reduction_magic_percent;
	damage_reduction_strength_percent;
	damage_reduction_dexterity_percent;
	parade_chance;
	return_percent;
	reallife;
	poisoned;
	constructor(){
		super();
		this.poisoned=0;
		this.life=10;
		this.damage_increase_magic=1;
		this.damage_increase_strength=1;
		this.damage_increase_dexterity=1;
		this.reallife=this.life;		
		this.helmet = new stuff(_helmet, _black);
		this.bracelet1 = new stuff(_bracelet, _black);
		this.armor = new stuff(_armor, _black);
		this.bracelet2 = new stuff(_bracelet, _black);
		this.weapon = new stuff(_weapon, _black);
		this.belt = new stuff(_belt, _black);
		this.gloves = new stuff(_gloves, _black);
		this.pants = new stuff(_pants, _black);
		this.boots = new stuff(_boots, _black);
		this.critical_chance = this.getAllStats(_critical_chance);
		this.damage_reduction_magic_percent = this.getAllStats(_damage_reduction_magic_percent);
		this.damage_reduction_strength_percent = this.getAllStats(_damage_reduction_strength_percent);
		this.damage_reduction_dexterity_percent = this.getAllStats(_damage_reduction_dexterity_percent);
		this.parade_chance = this.getAllStats(_parade_chance);
		this.return_percent = this.getAllStats(_return_percent);
		this.affinity=3;
	}
	ReinitFromObject(object){
		super.ReinitFromObject(object);
		this.poisoned=object.poisoned;
		this.life=object.life;
		this.damage_increase_magic=object.damage_increase_magic;
		this.damage_increase_strength=object.damage_increase_strength;
		this.damage_increase_dexterity=object.damage_increase_dexterity;
		this.reallife=object.reallife;		
		this.helmet.ReinitFromObject(object.helmet);
		this.bracelet1.ReinitFromObject(object.bracelet1);
		this.armor.ReinitFromObject(object.armor);
		this.bracelet2.ReinitFromObject(object.bracelet2);
		this.weapon.ReinitFromObject(object.weapon);
		this.belt.ReinitFromObject(object.belt);
		this.gloves.ReinitFromObject(object.gloves);
		this.pants.ReinitFromObject(object.pants);
		this.boots.ReinitFromObject(object.boots);
		this.critical_chance = object.critical_chance;
		this.damage_reduction_magic_percent = object.damage_reduction_magic_percent;
		this.damage_reduction_strength_percent = object.damage_reduction_strength_percent;
		this.damage_reduction_dexterity_percent = object.damage_reduction_dexterity_percent;
		this.parade_chance = object.parade_chance;
		this.return_percent = object.return_percent;
		this.affinity=object.affinity;
	}
	Reinit(){
		super.Reinit();
		this.poisoned=0;
		this.life=10;
		this.damage_increase_magic=1;
		this.damage_increase_strength=1;
		this.damage_increase_dexterity=1;
		this.reallife=this.life;		
		this.helmet = new stuff(_helmet, _black);
		this.bracelet1 = new stuff(_bracelet, _black);
		this.armor = new stuff(_armor, _black);
		this.bracelet2 = new stuff(_bracelet, _black);
		this.weapon = new stuff(_weapon, _black);
		this.belt = new stuff(_belt, _black);
		this.gloves = new stuff(_gloves, _black);
		this.pants = new stuff(_pants, _black);
		this.boots = new stuff(_boots, _black);
		this.critical_chance = this.getAllStats(_critical_chance);
		this.damage_reduction_magic_percent = this.getAllStats(_damage_reduction_magic_percent);
		this.damage_reduction_strength_percent = this.getAllStats(_damage_reduction_strength_percent);
		this.damage_reduction_dexterity_percent = this.getAllStats(_damage_reduction_dexterity_percent);
		this.parade_chance = this.getAllStats(_parade_chance);
		this.return_percent = this.getAllStats(_return_percent);
		this.affinity=3;
	}
	IsDead(){
		return this.reallife<=0;
	}
	ReduceLife(value){
		this.reallife=this.reallife-value;
		if(this.reallife<0)
			this.reallife=0;
	}
	ReducePoisoned(value){
		this.poisoned=this.poisoned-value;
		if(this.poisoned<0)
			this.poisoned=0;
	}
	IncreaseLife(value){
		this.reallife=this.reallife+value;
		if(this.reallife>this.life)
			this.reallife=this.life;
	}
	RecalculateStats(){
		this.critical_chance = this.getAllStats(_critical_chance);
		this.damage_reduction_magic_percent = this.getAllStats(_damage_reduction_magic_percent);
		this.damage_reduction_strength_percent = this.getAllStats(_damage_reduction_strength_percent);
		this.damage_reduction_dexterity_percent = this.getAllStats(_damage_reduction_dexterity_percent);
		this.parade_chance = this.getAllStats(_parade_chance);
		this.return_percent = this.getAllStats(_return_percent);
	}
	getAllStats(stat_name){
		switch(stat_name){
			case _critical_chance:
				return Math.round(10*50*(1 - 1/(this.getAllStats(_strength)/1000+1)))/10;
			case _damage_reduction_magic_percent:
				return Math.round(10*40*(1 - 1/(this.getAllStats(_magic)/1000+1)))/10;
			case _damage_reduction_strength_percent:
				return Math.round(10*40*(1 - 1/(this.getAllStats(_strength)/1000+1)))/10;
			case _damage_reduction_dexterity_percent:
				return Math.round(10*40*(1 - 1/(this.getAllStats(_dexterity)/1000+1)))/10;
			case _parade_chance:
				return Math.round(10*50*(1 - 1/(this.getAllStats(_dexterity)/1000+1)))/10;
			case _return_percent:
				return Math.round(10*50*(1 - 1/(this.getAllStats(_magic)/1000+1)))/10;
			default:
				return this.getSutffStats(stat_name)+this.getStat(stat_name);
		}
	}	
	getSutffStats(stat_name){
		return this.helmet.getStat(stat_name,this.affinity) + this.bracelet1.getStat(stat_name,this.affinity) + this.armor.getStat(stat_name,this.affinity) + this.bracelet2.getStat(stat_name,this.affinity) + this.weapon.getStat(stat_name,this.affinity) + this.belt.getStat(stat_name,this.affinity) + this.gloves.getStat(stat_name,this.affinity) + this.pants.getStat(stat_name,this.affinity) + this.boots.getStat(stat_name,this.affinity);
	}	
	getStat(stat_name){
		switch(stat_name){
			case _life:
				return this.life;
			case _magic:
				return this.magic;
			case _strength:
				return this.strength;
			case _dexterity:
				return this.dexterity;
			case _critical_chance:
				return this.critical_chance;
			case _damage_reduction_magic:
				return this.damage_reduction_magic;
			case _damage_reduction_strength:
				return this.damage_reduction_strength;
			case _damage_reduction_dexterity:
				return this.damage_reduction_dexterity;
			case _damage_increase_magic:
				return this.damage_increase_magic;
			case _damage_increase_strength:
				return this.damage_increase_strength;
			case _damage_increase_dexterity:
				return this.damage_increase_dexterity;
			case _poison:
				return this.poison;
			case _vampirism:
				return this.vampirism;
			case _gold:
				return this.gold;
		}
	}
}
class mob extends character{
	mobtype;
	attacktype;
	effecttype;
	constructor(level){
		super();
		this.life = 5;
		var stats_points_number = 10*level;
		var statsToUpgrade = [_life,_magic,_strength,_dexterity,_damage_increase_magic,_damage_increase_strength,_damage_increase_dexterity,_poison,_vampirism];
		var percentToUse = [];
		this.mobtype=getRndInteger(0, 6);
		switch(this.mobtype){
			case 0: //random
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 1: //rogue master
				percentToUse = [20,0,0,50,0,0,30,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=2;
				this.effecttype=2;
				break;
			case 2: // magus master
				percentToUse = [20,50,0,0,30,0,0,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=0;
				this.effecttype=0;
				break;
			case 3: // warrior master
				percentToUse = [20,0,50,0,0,30,0,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=1;
				this.effecttype=1;
				break;
			case 4: // poison master
				percentToUse = [20,0,0,40,0,0,0,40,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=2;
				break;
			case 5: // vampire master
				percentToUse = [15,10,10,10,5,5,5,0,40];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 6: // tank
				percentToUse = [40,10,10,10,8,8,8,0,6];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
		}			
		this.RecalculateStats();
		this.reallife=this.life;
	}
	Reinit(level){
		super.Reinit();
		this.life = 5;
		var stats_points_number = 10*level;
		var statsToUpgrade = [_life,_magic,_strength,_dexterity,_damage_increase_magic,_damage_increase_strength,_damage_increase_dexterity,_poison,_vampirism]
		var percentToUse = [];
		this.mobtype=getRndInteger(0, 6);
		switch(this.mobtype){
			case 0: //random
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 1: //rogue master
				percentToUse = [20,0,0,50,0,0,30,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=2;
				this.effecttype=2;
				break;
			case 2: // magus master
				percentToUse = [20,50,0,0,30,0,0,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=0;
				this.effecttype=0;
				break;
			case 3: // warrior master
				percentToUse = [20,0,50,0,0,30,0,0,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=1;
				this.effecttype=1;
				break;
			case 4: // poison master
				percentToUse = [20,0,0,40,0,0,0,40,0];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=2;
				break;
			case 5: // vampire master
				percentToUse = [15,10,10,10,5,5,5,0,40];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 6: // tank
				percentToUse = [40,10,10,10,8,8,8,0,6];
				var statsPoints = [0,0,0,0,0,0,0,0,0];
				for(var i =0;i<statsToUpgrade.length;i++){
					statsPoints[i] = Math.round(stats_points_number*percentToUse[i]/100);
				}
				for(var i =0;i<statsToUpgrade.length;i++){
					var temp_stats_points_number = statsPoints[i];
					while(CanStillUpgradeStats(this,temp_stats_points_number,statsToUpgrade[i])){
						if(GetDiamondCost(statsToUpgrade[i],this)<=temp_stats_points_number){
							stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							temp_stats_points_number = temp_stats_points_number - GetDiamondCost(statsToUpgrade[i],this);
							UpgradeStat(statsToUpgrade[i],this);						
						}
					}
				}
				while(CanStillUpgrade(this,stats_points_number)){
					var randint = getRndInteger(0, statsToUpgrade.length-1);
					if(GetDiamondCost(statsToUpgrade[randint],this)<=stats_points_number){
						stats_points_number= stats_points_number - GetDiamondCost(statsToUpgrade[randint],this);
						UpgradeStat(statsToUpgrade[randint],this);						
					}
				}
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
		}			
		this.RecalculateStats();
		this.reallife=this.life;
	}
	ReinitFromObject(object){
		super.ReinitFromObject(object);
		this.mobtype=object.mobtype;
		this.attacktype=object.attacktype;
		this.effecttype=object.effecttype;
	}
	ChangeAttackEffect(){
		switch(this.mobtype){
			case 0: //random
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 1: //rogue master
				this.attacktype=2;
				this.effecttype=2;
				break;
			case 2: //magus master
				this.attacktype=0;
				this.effecttype=0;
				break;
			case 3: //magus master
				this.attacktype=1;
				this.effecttype=1;
				break;
			case 4: //poison master
				this.attacktype=getRndInteger(0,2);
				this.effecttype=2;
				break;
			case 5: //vampire master
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
			case 6: //tank master
				this.attacktype=getRndInteger(0,2);
				this.effecttype=getRndInteger(0,2);
				break;
		}
	}
}
class damage_heal{
	min;
	max;
	affinity;
	constructor(min,max, affinity){
		this.min=min;
		this.max=max;
		this.affinity=affinity;
	}
}
function CanStillUpgrade(character,stats_points_number){
	if(GetDiamondCost(_life,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_magic,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_strength,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_dexterity,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_damage_increase_magic,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_damage_increase_strength,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_damage_increase_dexterity,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_poison,character)<=stats_points_number)
		return true;
	if(GetDiamondCost(_vampirism,character)<=stats_points_number)
		return true;
	return false;
}
function CanStillUpgradeStats(character,stats_points_number,stat_name){
	return GetDiamondCost(stat_name,character)<=stats_points_number;
}

function RefreshMobStats(){
	mob.RecalculateStats();
	var _reallife_stat_mob = document.getElementById('_reallife_stat_mob');
	_reallife_stat_mob.innerHTML=mob.reallife;
	var _life_stat_mob = document.getElementById('_life_stat_mob');
	_life_stat_mob.innerHTML=mob.life;
	var _magic_stat_mob = document.getElementById('_magic_stat_mob');
	_magic_stat_mob.innerHTML=mob.magic;
	var _strength_stat_mob = document.getElementById('_strength_stat_mob');
	_strength_stat_mob.innerHTML=mob.strength;
	var _dexterity_stat_mob = document.getElementById('_dexterity_stat_mob');
	_dexterity_stat_mob.innerHTML=mob.dexterity;
	var _damage_increase_magic_stat_mob = document.getElementById('_damage_increase_magic_stat_mob');
	_damage_increase_magic_stat_mob.innerHTML=mob.damage_increase_magic;
	var _damage_reduction_magic_stat_mob = document.getElementById('_damage_reduction_magic_stat_mob');
	_damage_reduction_magic_stat_mob.innerHTML=mob.damage_reduction_magic;
	var _damage_reduction_magic_percent_stat_mob = document.getElementById('_damage_reduction_magic_percent_stat_mob');
	_damage_reduction_magic_percent_stat_mob.innerHTML=mob.damage_reduction_magic_percent;
	var _damage_increase_strength_stat_mob = document.getElementById('_damage_increase_strength_stat_mob');
	_damage_increase_strength_stat_mob.innerHTML=mob.damage_increase_strength;
	var _damage_reduction_strength_percent_stat_mob = document.getElementById('_damage_reduction_strength_percent_stat_mob');
	_damage_reduction_strength_percent_stat_mob.innerHTML=mob.damage_reduction_strength_percent;
	var _damage_increase_dexterity_stat_mob = document.getElementById('_damage_increase_dexterity_stat_mob');
	_damage_increase_dexterity_stat_mob.innerHTML=mob.damage_increase_dexterity;
	var _damage_reduction_dexterity_stat_mob = document.getElementById('_damage_reduction_dexterity_stat_mob');
	_damage_reduction_dexterity_stat_mob.innerHTML=mob.damage_reduction_dexterity;
	var _damage_reduction_dexterity_percent_stat_mob = document.getElementById('_damage_reduction_dexterity_percent_stat_mob');
	_damage_reduction_dexterity_percent_stat_mob.innerHTML=mob.damage_reduction_dexterity_percent;
	var _return_percent_stat_mob = document.getElementById('_return_percent_stat_mob');
	_return_percent_stat_mob.innerHTML=mob.return_percent;
	var _critical_chance_stat_mob = document.getElementById('_critical_chance_stat_mob');
	_critical_chance_stat_mob.innerHTML=mob.critical_chance;
	var _parade_chance_stat_mob = document.getElementById('_parade_chance_stat_mob');
	_parade_chance_stat_mob.innerHTML=mob.parade_chance;
	var _poison_stat_mob = document.getElementById('_poison_stat_mob');
	_poison_stat_mob.innerHTML=mob.poison;
	var _poisoned_stat_mob = document.getElementById('_poisoned_stat_mob');
	_poisoned_stat_mob.innerHTML=mob.poisoned;
	var _vampirism_stat_mob = document.getElementById('_vampirism_stat_mob');
	_vampirism_stat_mob.innerHTML=mob.vampirism;
}
function RefreshMobImage(){
	var mob_picture_src = document.getElementById('mob_picture_src');
	mob_picture_src.src="ressources/images/mobs/"+mob.mobtype+".png";
}
function init_character(){
	character = new character();
	RefreshCharacterStats();
	RefreshPlayerLifeBar();
}
function init_mob(level){
	mob = new mob(level);
	RefreshMobLevel();
	RefreshMobStats();
	RefreshMobImage();
	RefreshMobLifeBar();
	RefreshMobAttackImage();
}
function reinit_mob(level){
	mob.Reinit(level);
	RefreshMobLevel();
	RefreshMobStats();
	RefreshMobImage();
	RefreshMobLifeBar();
	RefreshMobAttackImage();
}
function RefreshMobAttackImage(){
	var mob_combat_action_src = document.getElementById('mob_combat_action_src');
	mob_combat_action_src.src="ressources/images/actions/"+effect_types[mob.effecttype]+"_"+attack_types[mob.attacktype]+".png";
}
function RefreshMobLevel(){
	var mob_level = document.getElementById('mob_level');
	mob_level.innerHTML=level;
}
function RefreshMobLifeBar(){
	var mob_lifebar_red = document.getElementById('mob_lifebar_red');
	var mob_lifebar_green = document.getElementById('mob_lifebar_green');
	var percentdamage = Math.round((mob.life - mob.reallife)*100/mob.life);
	mob_lifebar_red.style.height = percentdamage+"%";
	mob_lifebar_green.style.height = (100-percentdamage)+"%";
}
function RefreshPlayerLifeBar(){
	var player_lifebar_red = document.getElementById('player_lifebar_red');
	var player_lifebar_green = document.getElementById('player_lifebar_green');
	var percentdamage = Math.round((character.getAllStats(_life) - character.reallife)*100/character.getAllStats(_life));
	player_lifebar_red.style.height = percentdamage+"%";
	player_lifebar_green.style.height = (100-percentdamage)+"%";
}
function DoTurn(attacktype,effecttype){
	var integer = parseInt(document.getElementById('number_of_attack_text').value);
	if(!isNaN(integer)){
		for(var i =0;i<integer;i++){
			DoTurns(attacktype,effecttype);
		}
	}else{
		DoTurns(attacktype,effecttype);
	}
}
function DoTurns(attacktype,effecttype){
	if(IsFirstTurn){
		ClearInfo();
		IsFirstTurn=false;
	}
	WriteInfo("");
	EndFight = false;
	//Player damage calculation
	var base_damage_player;
	var base_reduction_mob;
	var base_reduction_percent_mob;
	switch(attacktype){
		case "magic":
			base_damage_player = Math.round(character.getAllStats(_damage_increase_magic)*(1+character.getAllStats(_magic)/100));
			base_reduction_mob = mob.damage_reduction_magic;
			base_reduction_percent_mob = mob.damage_reduction_magic_percent;
			break;
		case "strength":
			base_damage_player = Math.round(character.getAllStats(_damage_increase_strength)*(1+character.getAllStats(_strength)/100));
			base_reduction_mob = mob.damage_reduction_strength;
			base_reduction_percent_mob = mob.damage_reduction_strength_percent;
			break;
		case "dexterity":
			base_damage_player = Math.round(character.getAllStats(_damage_increase_dexterity)*(1+character.getAllStats(_dexterity)/100));
			base_reduction_mob = mob.damage_reduction_dexterity;
			base_reduction_percent_mob = mob.damage_reduction_dexterity_percent;
			break;
	}
	var real_damage_player = Math.round(base_damage_player*(1-base_reduction_percent_mob/100))-base_reduction_mob;
	
	//Mob damage calculation
	var base_damage_mob;
	var base_reduction_player;
	var base_reduction_percent_player;
	switch(attack_types[mob.attacktype]){
		case "magic":
			base_damage_mob = Math.round(mob.damage_increase_magic)*(1+mob.magic/100);
			base_reduction_player = character.getAllStats(_damage_reduction_magic);
			base_reduction_percent_player = character.getAllStats(_damage_reduction_magic_percent);
			break;
		case "strength":
			base_damage_mob = Math.round(mob.damage_increase_strength)*(1+mob.strength/100);
			base_reduction_player = character.getAllStats(_damage_reduction_strength);
			base_reduction_percent_player = character.getAllStats(_damage_reduction_strength_percent);
			break;
		case "dexterity":
			base_damage_mob = Math.round(mob.damage_increase_dexterity)*(1+mob.dexterity/100);
			base_reduction_player = character.getAllStats(_damage_reduction_dexterity);
			base_reduction_percent_player = character.getAllStats(_damage_reduction_dexterity_percent);
			break;
	}
	var real_damage_mob = Math.round(base_damage_mob*(1-base_reduction_percent_player/100))-base_reduction_player;
	//// PLAYER TURN
	//Poison damage on player
	if(character.poisoned>0){
		character.ReduceLife(character.poisoned);
		WriteInfo("Player takes "+character.poisoned+" damage from poison");		
	}
	if(character.IsDead()){
		PlayerDeath();
		EndFight=true;
	}
	if(!EndFight){
		//Player attack
		WriteInfo("Player attacks with "+attacktype+" and " + effecttype + " power");
		if(effecttype=="critical"){
			var chance = getRndInteger(1,1000);
			if(chance<=Math.round(character.getAllStats(_critical_chance)*10)){
				real_damage_player = Math.round(base_damage_player*2*(1-base_reduction_percent_mob/100))-base_reduction_mob;
				WriteInfo("Player is going for critical hit!");
			}
		}
		if(effect_types[mob.effecttype]=="parade" && !EndFight){
			WriteInfo("Monster tries to block the attack");
			var chance = getRndInteger(1,1000);
			if(chance<=Math.round(mob.parade_chance*10)){			
				WriteInfo("Monster blocks the attack!");
			}else{
				WriteInfo("Player deals "+real_damage_player+" damages to monster");
				mob.ReduceLife(real_damage_player);
				if(character.getAllStats(_vampirism)>0){
					character.IncreaseLife(character.getAllStats(_vampirism));
					WriteInfo("Player steals "+character.getAllStats(_vampirism)+" life point");
				}
				if(character.getAllStats(_poison)>0){
					mob.poisoned=mob.poisoned+character.getAllStats(_poison);
					WriteInfo("Player increases monster poison dot by "+character.getAllStats(_poison));
				}
				if(mob.IsDead()){
					PlayerWin();
					EndFight=true;
				}
			}
		}
		if(effect_types[mob.effecttype]=="return" && !EndFight){
			WriteInfo("Player deals "+real_damage_player+" damages to monster");
			mob.ReduceLife(real_damage_player);
			if(character.getAllStats(_vampirism)>0){
				character.IncreaseLife(character.getAllStats(_vampirism));
				WriteInfo("Player steals "+character.getAllStats(_vampirism)+" life point");
			}
			if(character.getAllStats(_poison)>0){
				mob.poisoned=mob.poisoned+character.getAllStats(_poison);
				WriteInfo("Player increases monster poison dot by "+character.getAllStats(_poison));
			}
			if(mob.IsDead()){
				PlayerWin();
				EndFight=true;
			}
			if(!EndFight){
				var returnedDamageToPlayer = Math.round(Math.round(real_damage_player*(mob.return_percent/100))*(1-base_reduction_percent_player/100))-base_reduction_player;	
				WriteInfo("Monster returns "+returnedDamageToPlayer+" damage");
				character.ReduceLife(returnedDamageToPlayer);
				if(character.IsDead()){
					PlayerDeath();
					EndFight=true;
				}
			}
		}
		if(effect_types[mob.effecttype]=="critical" && !EndFight){
			WriteInfo("Player deals "+real_damage_player+" damages to monster");
			mob.ReduceLife(real_damage_player);
			if(character.getAllStats(_vampirism)>0){
				character.IncreaseLife(character.getAllStats(_vampirism));
				WriteInfo("Player steals "+character.getAllStats(_vampirism)+" life point");
			}
			if(character.getAllStats(_poison)>0){
				mob.poisoned=mob.poisoned+character.getAllStats(_poison);
				WriteInfo("Player increases monster poison dot by "+character.getAllStats(_poison));
			}
			if(character.getAllStats(_vampirism)>0){
				character.IncreaseLife(character.getAllStats(_vampirism));
				WriteInfo("Player steals "+character.getAllStats(_vampirism)+" life point");
			}
			if(character.getAllStats(_poison)>0){
				mob.poisoned=mob.poisoned+character.getAllStats(_poison);
				WriteInfo("Player increases monster poison dot by "+character.getAllStats(_poison));
			}
			if(mob.IsDead()){
				PlayerWin();
				EndFight=true;
			}
		}
		
		if(!EndFight){
			//// Monster TURN
			//Poison damage on monster
			if(mob.poisoned>0){
				mob.ReduceLife(mob.poisoned);
				WriteInfo("Monster takes "+mob.poisoned+" damage from poison");		
			}
			if(mob.IsDead()){
				PlayerWin();
				EndFight=true;
			}
			
			//Monster attack
			if(!EndFight){
				WriteInfo("Monster attacks with "+attack_types[mob.attacktype]+" and " + effect_types[mob.effecttype] + " power");
				if(effect_types[mob.effecttype]=="critical"){
					var chance = getRndInteger(1,1000);
					if(chance<=Math.round(mob.critical_chance*10)){
						real_damage_mob = Math.round(base_damage_mob*2*(1-base_reduction_percent_player/100))-base_reduction_player;
						WriteInfo("Monster is going for critical hit!");
					}
				}
			}
			if(effecttype=="parade" && !EndFight){
				WriteInfo("Player tries to block the attack");
				var chance = getRndInteger(1,1000);
				if(chance<=Math.round(character.getAllStats(_parade_chance)*10)){			
					WriteInfo("Player blocks the attack!");
				}else{
					WriteInfo("Monster deals "+real_damage_mob+" damages to player");
					character.ReduceLife(real_damage_mob);
					if(mob.vampirism>0){
						mob.IncreaseLife(mob.vampirism);
						WriteInfo("Monster steals "+mob.vampirism+" life point");
					}
					if(mob.poison>0){
						character.poisoned=character.poisoned+mob.poison;
						WriteInfo("Monster increases player poison dot by "+mob.poison);
					}
					if(character.IsDead()){
						PlayerDeath();
						EndFight=true;
					}
				}
			}
			if(effecttype=="return" && !EndFight){
				WriteInfo("Monster deals "+real_damage_mob+" damages to player");
				character.ReduceLife(real_damage_mob);
				if(mob.vampirism>0){
					mob.IncreaseLife(mob.vampirism);
					WriteInfo("Monster steals "+mob.vampirism+" life point");
				}
				if(mob.poison>0){
					character.poisoned=character.poisoned+mob.poison;
					WriteInfo("Monster increases player poison dot by "+mob.poison);
				}
				if(character.IsDead()){
					PlayerDeath();
					EndFight=true;
				}
				if(!EndFight){
					var returnedDamageToMonster = Math.round(Math.round(real_damage_mob*(character.getAllStats(_return_percent)/100))*(1-base_reduction_percent_mob/100))-base_reduction_mob;	
					WriteInfo("Player returns "+returnedDamageToMonster+" damage");
					mob.ReduceLife(returnedDamageToMonster);
					if(mob.IsDead()){
						PlayerWin();
						EndFight=true;
					}
				}
			}
			if(effecttype=="critical" && !EndFight){
				WriteInfo("Monster deals "+real_damage_mob+" damages to player");
				character.ReduceLife(real_damage_mob);
				if(mob.vampirism>0){
					mob.IncreaseLife(mob.vampirism);
					WriteInfo("Monster steals "+mob.vampirism+" life point");
				}
				if(mob.poison>0){
					character.poisoned=character.poisoned+mob.poison;
					WriteInfo("Monster increases player poison dot by "+mob.poison);
				}
				if(character.IsDead()){
					PlayerDeath();
					EndFight=true;
				}
			}
		}
		if(!EndFight)
			mob.ChangeAttackEffect();
		//EndRefresh
		RefreshCharacterStats();
		RefreshMobStats();
		RefreshMobLifeBar();
		RefreshPlayerLifeBar();
		RefreshMobAttackImage();
	}
}
function PlayerDeath(){
	WriteInfo("Player is dead, you lose all your coins and go back to Level 1");
	coins=0;
	level = 1;
	RefreshDiamonds();
	RefreshCoins();
	character.reallife=character.life;
	character.poisoned=0;
	mob.Reinit(level);
	IsFirstTurn=true;
	RefreshCharacterStats();
	RefreshMobStats();
	RefreshMobLifeBar();
	RefreshPlayerLifeBar();
	RefreshMobAttackImage();
	RefreshMobLevel();
	RefreshMobImage();
}
function PlayerWin(){
	WriteInfo("Player won, you go to next Level");
	coins=coins+(GetQuotient(level,100)+1)*10+character.getAllStats("_gold");
	RefreshDiamonds();
	RefreshCoins();
	level = level+1;
	mob.Reinit(level);
	IsFirstTurn=true;
	RefreshCharacterStats();
	RefreshMobStats();
	RefreshMobLifeBar();
	RefreshPlayerLifeBar();
	RefreshMobAttackImage();
	RefreshMobLevel();
	RefreshMobImage();
}
function WriteInfo(texts){
	document.getElementById("combat_info_text").value = document.getElementById("combat_info_text").value + texts + "\n";
	document.getElementById("combat_info_text").scrollTop = document.getElementById("combat_info_text").scrollHeight
}
function ClearInfo(){
	document.getElementById("combat_info_text").value = "";
}

class SavedDataForJSON{
	character;
	mob;
	coins;
	diamonds;
	level;
	constructor(character,mob,coins,diamonds,level){
		this.character=character;
		this.mob=mob;
		this.coins=coins;
		this.diamonds=diamonds;
		this.level=level;
	}
}
function save(){
	var savedData = new SavedDataForJSON(character,mob,coins,diamonds,level);
	var jsonData = JSON.stringify(savedData);
	download("save.json",jsonData);
}
function load(){
	var input = document.createElement('input');
	input.type = 'file';

	input.onchange = e => { 
		// getting a hold of the file reference
		var file = e.target.files[0]; 
		// setting up the reader
		var reader = new FileReader();
		reader.readAsText(file,'UTF-8');
		// here we tell the reader what to do when it's done reading...
		reader.onload = readerEvent => {
			var content = readerEvent.target.result; // this is the content!
			var savedData = JSON.parse(content);
			/*character = savedData.character;
			mob = savedData.mob;*/
			character.ReinitFromObject(savedData.character);
			mob.ReinitFromObject(savedData.mob);
			coins = savedData.coins;
			diamonds = savedData.diamonds;
			level = savedData.level;
			RefreshAll();
		}
	}
	input.click();
}
function RefreshAll(){
	RefreshCharacterStats();
	RefreshCoins();
	RefreshDiamonds();
	RefreshMobAttackImage();
	RefreshMobImage();
	RefreshMobLevel();
	RefreshMobLifeBar();
	RefreshMobStats();
	RefreshPlayerLifeBar();
	RefreshStatsCosts();
}
function download(filename, texts) {
	var element_ = document.createElement('a');
	element_.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texts));
	element_.setAttribute('download', filename);
	element_.style.display = 'none';
	element_.click();
}

main();
function main(){
	//Default values initialisation
	init_default_values();
	//Default initialisation of hover boxes on stuff
	init_hoverboxes();
	//Default initialisation of coins/diamond
	init_coins();
	//Default character (random affinity)
	init_character();
	RefreshStatsCosts();
	//Default mob
	level = 1;
	init_mob(level);
	//Init TextArea
	document.getElementById("combat_info_text").value="";
	//Init shop
	init_shop();
}