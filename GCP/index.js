window.onload = function(){
  getMap();
}

function getMap(){
  var svg = d3.select("svg"),
  width = svg.attr("width"),
  height = svg.attr("height");
  var projection = d3.geoMercator()
  .center([107, 31])
  .scale(600)
  .translate([width/2, height/2]);
  var path = d3.geoPath()
  .projection(projection);

  d3.json("china.json", function(error, root) {
    if (error) 
      return console.log(error);
    var groups = svg.append('g');
    groups.selectAll('path')
    .data(root.features)
    .enter()
    .append('path')
    .attr('class', (d,i)=> 'province '+root.features[i].id)
    .attr('d',path)

  });
}

function show() {
  pro = [
  {
    id: 0,
    name: 'nei_meng_gu',
    neighbor: ['gan_su','ning_xia','shan_xi_1','shan_dong','he_bei','liao_ning','ji_lin','hei_long_jiang'],
    neighborNum: 8,
  },{
    id: 1,
    name: 'shan_xi_1',
    neighbor: ['nei_meng_gu','ning_xia','gan_su','si_chuan','chong_qing','hu_bei','he_nan','shan_xi_2'],
    neighborNum: 8
  },{
    name: 'xin_jiang',
    neighbor: ['xi_zang','qing_hai','gan_su'],
    neighborNum: 3,
  },{
    name: 'xi_zang',
    neighbor: ['xin_jiang','qing_hai','si_chuan','yun_nan'],
    neighborNum: 4,
  },{
    name: 'qing_hai',
    neighbor: ['xin_jiang','xi_zang','si_chuan','gan_su'],
    neighborNum: 4,
  },{
    name: 'si_chuan',
    neighbor: ['gan_su','qing_hai','xi_zang','yun_nan','gui_zhou','chong_qing','shan_xi_1'],
    neighborNum: 7,
  },{
    name: 'hei_long_jiang',
    neighbor: ['nei_meng_gu','ji_lin'],
    neighborNum: 2
  },{
    name: 'gan_su',
    neighbor: ['xin_jiang','qing_hai','si_chuan','shan_xi_1','ning_xia','nei_meng_gu'],
    neighborNum: 6
  },{
    name: 'yun_nan',
    neighbor: ['xin_jiang','si_chuan','gui_zhou','guang_xi'],
    neighborNum: 4,
  },{
    name: 'guang_xi',
    neighbor: ['yun_nan', 'gui_zhou', 'hu_nan', 'guang_dong', 'hai_nan'],
    neighborNum: 5
  },{
    name: 'hu_nan',
    neighbor: ['chong_qing','gui_zhou','guang_xi', 'guang_dong','jiang_xi', 'hu_bei'],
    neighborNum: 6
  },{
    name: 'guang_dong',
    neighbor: ['guang_xi','hu_nan','jiang_xi','fu_jian','xiang_gang','ao_men','hai_nan'],
    neighborNum: 7
  },{
    name: 'ji_lin',
    neighbor: ['hei_long_jiang','nei_meng_gu','ji_lin'],
    neighborNum: 3
  },{
    name: 'he_bei',
    neighbor: ['nei_meng_gu','shan_xi_2','he_nan','shan_dong','bei_jing','tian_jin','liao_ning'],
    neighborNum: 7
  },{
    name: 'hu_bei',
    neighbor: ['shan_xi_1','chong_qing','hu_nan','jiang_xi','an_hui','he_nan'],
    neighborNum: 6
  },{
    name: 'gui_zhou',
    neighbor: ['chong_qing','si_chuan','yun_nan','guang_xi','hu_nan'],
    neighborNum: 5
  },{
    name: 'shan_dong',
    neighbor: ['he_bei','he_nan','an_hui','jiang_su'],
    neighborNum: 4
  },{
    name: 'jiang_xi',
    neighbor: ['an_hui','hu_bei','hu_nan','guang_dong','fu_jian','zhe_jiang'],
    neighborNum: 6
  },{
    name: 'he_nan',
    neighbor: ['he_bei','shan_xi_1','shan_xi_2','hu_bei','an_hui','shan_dong'],
    neighborNum: 6
  },{
    name: 'liao_ning',
    neighbor: ['ji_lin','nei_meng_gu','he_bei'],
    neighborNum: 3
  },{
    name: 'shan_xi_2',
    neighbor: ['shan_xi_1','he_nan','he_bei','nei_meng_gu'],
    neighborNum: 4,
  },{
    name: 'an_hui',
    neighbor: ['jiang_su','shan_dong','he_nan','hu_bei','jiang_xi','zhe_jiang'],
    neighborNum: 6
  },{
    name: 'fu_jian',
    neighbor: ['zhe_jiang','jiang_xi','guang_dong','tai_wan'],
    neighborNum: 4,
  },{
    name: 'zhe_jiang',
    neighbor: ['shang_hai','jiang_su','an_hui','jiang_xi','fu_jian'],
    neighborNum: 5
  },{
    name: 'jiang_su',
    neighbor: ['shan_dong','an_hui','zhe_jiang','shang_hai'],
    neighborNum: 4,
  },{
    name: 'chong_qing',
    neighbor: ['shan_xi_1','si_chuan','gui_zhou','hu_nan','hu_bei'],
    neighborNum: 5
  },{
    name: 'ning_xia',
    neighbor: ['nei_meng_gu','gan_su','shan_xi_1'],
    neighborNum: 3
  },{
    name: 'hai_nan',
    neighbor: ['guang_dong','guang_xi'],
    neighborNum: 2
  },{
    name: 'tai_wan',
    neighbor: ['fu_jian'],
    neighborNum: 1
  },{
    name: 'bei_jing',
    neighbor: ['he_bei','tian_jin'],
    neighborNum: 2
  },{
    name: 'tian_jin',
    neighbor: ['bei_jing','he_bei'],
    neighborNum: 2
  },{
    name: 'shang_hai',
    neighbor: ['jiang_su','zhe_jiang'],
    neighborNum: 2
  },{
    name: 'xiang_gang',
    neighbor: ['guang_dong'],
    neighborNum: 1
  },{
    name: 'ao_men',
    neighbor: ['guang_dong'],
    neighborNum: 1
  }]

  for (var i = pro.length - 1; i >= 0; i--) {
    if (pro[i].name==='xin_jiang') {
      console.log(pro[i].neighbor.length)
    }
  }
}
