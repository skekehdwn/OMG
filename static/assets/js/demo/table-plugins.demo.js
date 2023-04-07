/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 1.8.0
Author: Sean Ngu

*/

var handleRenderReportTableData = function () {
	var reportTable = $('#reportDailyTable, #reportWeeklyTable, #reportMonthlyTable').DataTable({
		destroy: true,
		dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8 text-right'<'d-flex justify-content-end'fB>>>t<'row align-items-center'<'mr-auto col-md-6 mb-3 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [10, 20, 30, 40, 50],
		responsive: true,
		searching: true,
		language: {
			"decimal": "",
			"info": "현재 _START_ - _END_건 / 전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
	});
};

var handleRenderWeakTableData = function () {
	var weakTable = $('#weakTable-windows, #weakTable-unix').DataTable({
		dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8 text-right'<'d-flex justify-content-end'fB>>>t<'row align-items-center'<'mr-auto col-md-6 mb-3 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [10, 20, 30, 40, 50],
		responsive: true,
		destroy : true,
		searching: true,
		autoWidth: false,
		ordering: false,
		columnDefs: [
            { width: "2%", target: [0] },
            { width: "4%", target: [1] },
            { width: "20%", target: [2] },
            { width: "66%", target: [3] },
            { width: "3%", target: [4] },
            { width: "4%", target: [5] }
		],
		language: {
			"decimal": "",
			"info": "현재 _START_ - _END_건 / 전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
	});
};

var handleRenderWeakDetailTableData = function () {
	
	var url = (window.location.search).split('&');
    var swv = url[0].substr(url[0].indexOf("=") + 1);
    var count = url[1].substr(url[1].indexOf("=") + 1);
	var weakDetailtable = $('#weakTableDetail').DataTable({
		dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8 text-right'<'d-flex justify-content-end'fB>>>t<'row align-items-center'<'mr-auto col-md-6 mb-3 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [10, 20, 30, 40, 50],
		responsive: true,
		searching: true,
		autoWidth: false,
		ordering: false,
		serverSide: true,
		processing: true,
		ajax: {
			url: './paging?swv=' + swv + '&count=' + count,
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				console.log(data);
                return data;
			},
			// dataFilter: function (data) {
			// 	var json = jQuery.parseJSON(data);
			// 	console.log(json);
			// 	console.log(data);
			// 	json.recordsTotal = 10;
			// 	json.recordsFiltered = 42;
			// 	json.data = json.list;
 
			// 	return JSON.stringify(json);
			// }
		},
		columns: [
			{data : 'index'},
			{data : 'cid'},
			{data : 'cpnm'},
			{data : 'os'},
			{data : 'ip'},
			{data : 'type'},
			{data : 'last_login'},
			{data : 'index'},
		],
		columnDefs: [
			{ width: "5%", target: [0] },
			{ width: "15%", target: [1] },
			{ width: "16%", target: [2] },
			{ width: "20%", target: [3] },
			{ width: "14%", target: [4] },
			{ width: "10%", target: [5] },
			{ width: "15%", target: [6] },
			{
				width: "5%", target: [7],
				render: function (data, type, full, meta) {
					return '<i class="caret" onclick="caret_event();"></i>';
				}
			}
		],
		language: {
			"decimal": "",
			"info": "현재 _START_ - _END_건 / 전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
	});
};

var handleRenderWeakDetailModalTableData = function () {
	var weakDetailModaltable = $('#weakTableDetail_modal').DataTable({
		dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8 text-right'<'d-flex justify-content-end'fB>>>t<'row align-items-center'<'mr-auto col-md-6 mb-3 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [10, 20, 30, 40, 50],
		responsive: true,
		searching: true,
		autoWidth: false,
		ordering: false,
		columnDefs: [
			{ width: "5%", target: [0] },
			{ width: "85%", target: [1] },
			{ width: "5%", target: [2] },
			{ width: "5%", target: [3] },
		],
		language: {
			"info": "현재 _START_ - _END_건 / 전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
	});

	$("#weakTableDetail_modal_filter.dataTables_filter").append($("#weak-box"));

	var categoryIndex = 0;
	$("#weakTableDetail_modal th").each(function (i) {
		if ($($(this)).html() == "상태") {
			categoryIndex = i; return false;
		}
	});
	$.fn.dataTable.ext.search.push(
		function (settings, data, dataIndex) {
			var selectedItem = $('#weak-box').val()
			var category = data[categoryIndex];
			if (selectedItem === "" || category.includes(selectedItem)) {
				return true;
			}
			return false;
		}
	);

	$("#weak-box").change(function (e) {
		weakDetailModaltable.draw();
	});
	weakDetailModaltable.draw();
};

var OshandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#OsDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'name'},
			{data: 'count'},

		],
		columnDefs : [
		    {targets: 0, width: "10%", className: 'text-center'},
		    {targets: 1, width: "70%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
		    {targets: 2, width: "20%", className: 'text-center'}
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
		drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#OsDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#OsDashboard-popupTable_paginate .paginate_button:first');
            }
        }
	});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
    });

    $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var serverhandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#serverBandBydashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'name'},
			{data: 'count'},
		],
		columnDefs: [
		    {targets: 0, width: "10%", className: 'text-center'},
		    {targets: 1, width: "70%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
		    {targets: 2, width: "20%", className: 'text-center'}
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#serverBandBydashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#serverBandBydashboard-popupTable_paginate .paginate_button:first');
            }
        }
	});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
    });

    $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var runningServicehandleRenderDashboardPopupTableData = function (url) {
    var pagingValue = url;
	var dashboardpopupTable = $('#runningServiceDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		autoWidth: true,
		ajax: {
			url: pagingValue ,
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'name'},
			{data: 'count'},
		],
		columnDefs: [
		    {targets: 0, width: "10%", className: 'text-center'},
		    {targets: 1, width: "70%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
		    {targets: 2, width: "20%", className: 'text-center'}
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
        pagingType: 'numbers',//이전 다음 버튼 히든처리

        //페이징 10칸식 이동 로직
        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){ // 페이지 수가 10개 이상일때  10칸이동버튼 활성화
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#runningServiceDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#runningServiceDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var physicalServerhandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#physicalServerDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'name'},
			{data: 'count'},
		],
		columnDefs: [
		    {targets: 0, width: "10%", className: 'text-center'},
		    {targets: 1, width: "70%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
		    {targets: 2, width: "20%", className: 'text-center'}

		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},

	drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#physicalServerDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#physicalServerDashboard-popupTable_paginate .paginate_button:first');
             }
        }

});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var gpuServerhandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#gpuServerDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'ip'},
			{data: 'name'},
			{data: 'model'},
			{data: 'count'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "20%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "30%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "28%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.model+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 4, width: "12%", className: 'text-center'},

		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
        pagingType: 'numbers',

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#gpuServerDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#gpuServerDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var handleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#MemoryDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data : 'index'},
			{data : 'ip'},
			{data : 'name'},
			{data : 'use'},
			{data : 'total'},
			{data : 'usage'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "20%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "34%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "12%", className: 'text-center'},
            {targets: 4, width: "12%", className: 'text-center'},
            {targets: 5, width: "12%", className: 'text-center'}
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
	    pagingType: 'numbers',


        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#MemoryDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#MemoryDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var CpuhandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#CpuDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data: 'index'},
			{data: 'ip'},
			{data: 'name'},
			{data: 'use'},
			{data: 'usage'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "20%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "40%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "17%", className: 'text-center'},
            {targets: 4, width: "13%", className: 'text-center'},
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
        pagingType: 'numbers',

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#CpuDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#CpuDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var DiskhandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#DiskDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},
		columns: [
			{data : 'index'},
			{data : 'ip'},
			{data : 'name'},
			{data : 'use'},
			{data : 'total'},
			{data : 'usage'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "20%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "34%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "12%", className: 'text-center'},
            {targets: 4, width: "12%", className: 'text-center'},
            {targets: 5, width: "12%", className: 'text-center'}
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
		pagingType: 'numbers',

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#DiskDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#DiskDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
var alarmCasehandleRenderDashboardPopupTableData = function () {
	var dashboardpopupTable = $('#alarmCaseDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,
		ajax: {
			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;
			}
		},

		columns: [
			{data: 'index'},
			{data: 'ip'},
			{data: 'name'},
			{data: 'ramusage'},
			{data: 'cpuusage'},
			{data: 'driveusage'},
			{data: 'date'},
			{data: 'index',
            className: 'select-checkbox',
            orderable: false}
		],
		columnDefs: [
            {targets: 0, width: "3%", className: 'text-center'},
            {targets: 1, width: "14%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "25%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "12%", className: 'text-center'},
            {targets: 4, width: "12%", className: 'text-center'},
            {targets: 5, width: "12%", className: 'text-center'},
            {targets: 6, width: "12%", className: 'text-center'},
            {targets: 7, width: "5%", render: function(data, type, row) {
            return `<button class="btn btn-outline-primary" onclick="sendEmail(\'`+row.ip+`\',\'`+row.name+`\',\'`+row.ramusage+`\',\'`+row.cpuusage+`\',\'`+row.driveusage+`\',\'`+row.date+`\')">전송</button>`}},
		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
		pagingType: 'numbers',

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#alarmCaseDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#alarmCaseDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});
	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};
//-------------------connectDestinationIp_--- 종윤---------------------------

var connectDestinationIphandleRenderDashboardPopupTableData = function () {

	var dashboardpopupTable = $('#connectDestinationIpDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],

		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,

		ajax: {

			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;


			}
		},
		columns: [
			{data: 'index'},
			{data: 'ip'},
			{data: 'name'},
			{data: 'port'},
			{data: 'count'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "30%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "30%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "20%", className: 'text-center', render: function(data, type, row) {return '<span title="'+row.port+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 4, width: "10%", className: 'text-center'},

		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},

	});
};
var connectSourceIphandleRenderDashboardPopupTableData = function () {

	var dashboardpopupTable = $('#connectSourceIpDashboard-popupTable').DataTable({
		dom: "<'d-flex justify-content-between mb-3'<'col-md-4 mb-md-0'l><'text-right'<'d-flex justify-content-end'fB>>>t<'align-items-center d-flex justify-content-between'<' mr-auto col-md-6 mb-md-0 mt-n2 'i><'mb-0 col-md-6'p>>",
		lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],

		responsive: true,
		searching: true,
		ordering: false,
		serverSide: true,
		displayLength: false,

		ajax: {

			url: 'paging/',
			type: "POST",
			dataSrc: function (res) {
				var data = res.data.item;
				return data;

                print(res)
			}
		},
		columns: [
			{data: 'index'},
			{data: 'ip'},
			{data: 'name'},
			{data: 'count'},
		],
		columnDefs: [
            {targets: 0, width: "10%", className: 'text-center'},
            {targets: 1, width: "35%", className: 'text-center text-truncate', render: function(data, type, row) {return '<span title="'+row.ip+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 2, width: "35%", className: 'text-start text-truncate', render: function(data, type, row) {return '<span title="'+row.name+'" data-toggle="tooltip">'+data+'</span>'}},
            {targets: 3, width: "10%", className: 'text-center'},

		],
		language: {
			"decimal": "",
			"info": "전체 _TOTAL_건",
			"infoEmpty": "데이터가 없습니다.",
			"emptyTable": "데이터가 없습니다.",
			"thousands": ",",
			"lengthMenu": "페이지당 _MENU_ 개씩 보기",
			"loadingRecords": "로딩 중입니다.",
			"processing": "",
			"zeroRecords": "검색 결과 없음",
			"paginate": {
				"first": "처음",
				"last": "끝",
				"next": "다음",
				"previous": "이전"
			},
			"search": "검색:",
			"infoFiltered": "(전체 _MAX_ 건 중 검색결과)",
			"infoPostFix": "",
		},
        		pagingType: 'numbers',

        drawCallback: function() {
            var current_page = dashboardpopupTable.page();
            var total_pages = dashboardpopupTable.page.info().pages;
            $('#nexts').remove();
            $('#after').remove();

            if (total_pages > 10){
            $('<button type="button" class="btn" id="nexts">10≫</button>')
            .insertAfter('#connectSourceIpDashboard-popupTable_paginate .paginate_button:last');
            $('<button type="button" class="btn" id="after">≪10</button>')
            .insertBefore('#connectSourceIpDashboard-popupTable_paginate .paginate_button:first');
            }
        }
});

	$(document).on('click', '#nexts, #after', function() {
        var current_page = dashboardpopupTable.page();
        var total_pages = dashboardpopupTable.page.info().pages;
        if ($(this).attr('id') == 'nexts') {
                if (current_page + 10 < total_pages) {
                    dashboardpopupTable.page(current_page + 10).draw('page');
                } else {
                    dashboardpopupTable.page(total_pages - 1).draw('page');
                }
                } else {
                    dashboardpopupTable.page(Math.max(current_page - 10, 0)).draw('page');
                }
});
        $(document).ready(function() {
        var customStyle = '<style>#nexts, #after {color: #FFFFFF; background-color: #FFFFFF26; margin-left: 5px; height: 33px; padding: 6px 12px; font-size: 15px; padding: 6px 12px; margin-right: 5px;}</style>';
        $('head').append(customStyle);
});
};




/* Controller weakBoxs
------------------------------------------------ */
$(document).ready(function () {

    if ($("#reportDailyTable, #reportWeeklyTable, #reportMonthlyTable").length > 0) {

        handleRenderReportTableData();

    }else if ($("#weakTable-windows, #weakTable-unix").length > 0) {

        handleRenderWeakTableData();

    }else if ($("#weakTableDetail").length > 0) {

        handleRenderWeakDetailTableData();

    }else if ($("#weakTableDetail_modal").length > 0) {

        handleRenderWeakDetailModalTableData();

    }else if($("#OsDashboard-popupTable").length > 0){

		OshandleRenderDashboardPopupTableData();
	}else if($("#serverBandBydashboard-popupTable").length > 0){

		serverhandleRenderDashboardPopupTableData();
	}else if($("#runningServiceDashboard-popupTable").length > 0){
	    runningServicehandleRenderDashboardPopupTableData("paging/");
	    var checkbox = document.getElementById("check_btn");
            checkbox.addEventListener("change", function() {
              if (checkbox.checked) {
                $('#runningServiceDashboard-popupTable').DataTable().destroy();
                runningServicehandleRenderDashboardPopupTableData("paging/");
              } else {
                $('#runningServiceDashboard-popupTable').DataTable().destroy();
                runningServicehandleRenderDashboardPopupTableData("paging2/");
              }
            });

	}else if($("#physicalServerDashboard-popupTable").length > 0){

		physicalServerhandleRenderDashboardPopupTableData();
	}else if($("#gpuServerDashboard-popupTable").length > 0){

		gpuServerhandleRenderDashboardPopupTableData();
	}else if($("#alarmCaseDashboard-popupTable").length > 0){

		alarmCasehandleRenderDashboardPopupTableData();
	}else if ($("#MemoryDashboard-popupTable").length > 0) {

        handleRenderDashboardPopupTableData();
	}else if ($("#CpuDashboard-popupTable").length > 0) {

		CpuhandleRenderDashboardPopupTableData();
    }else if($("#DiskDashboard-popupTable").length > 0){

		DiskhandleRenderDashboardPopupTableData();
//----------------------------ip 더보기 종윤--------------------------
	}else if($("#connectDestinationIpDashboard-popupTable").length > 0){
    	connectDestinationIphandleRenderDashboardPopupTableData();
	}else if($("#connectSourceIpDashboard-popupTable").length > 0){
    	connectSourceIphandleRenderDashboardPopupTableData();
    };
});
