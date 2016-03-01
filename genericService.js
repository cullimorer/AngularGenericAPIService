'use strict';

var app = angular.module('app.services');

app.service('sharedService', ['$resource', '$q', 'commonUtilities', function ($resource, $q, commonUtilities) {

    var base = 'http://localhost/API/';

    var res = $resource(base + ':url', null,
                {
                    'query': { method: 'GET', isArray: true },
                    'get': { method: 'GET' },
                    'update': { method: 'PUT' },
                    'save': { method: 'Post' },
                    'delete': { method: 'DELETE' }
                }
            );

    return {
        getListData: function (methodUrl, args) {
            var formattedUrl = commonUtilities.stringFormat(methodUrl, args);

            return res.query({
                url: formattedUrl
            }).$promise
                .then(function (data) {
                    return data;
                })
                .catch(function (reason) {
                    alert(reason);
                });
        },
        getData: function (methodUrl, args) {

            var formattedUrl = commonUtilities.stringFormat(methodUrl, args);

            return res.get({ url: formattedUrl }).$promise
                .then(function (data) {
                    return data;
                })
                .catch(function (reason) {
                    alert(reason);
                });
        },
        updateData: function (methodUrl, args, dto, msg) {

            var formattedUrl = commonUtilities.stringFormat(methodUrl, args);

            return res.update({ url: formattedUrl }, dto).$promise
                .then(function (data) {
                    return data;
                })
                .catch(function (reason) {
                    alert(reason);
                });
        },
        deleteData: function (methodUrl, args, dto, msg) {

            var formattedUrl = commonUtilities.stringFormat(methodUrl, args);

            return res.delete({ url: formattedUrl }, dto)
                .$promise
                .then(function (data) {
                    commonUtilities.addAlert(msg, 'success');
                    return data[0];
                })
                .catch(function (reason) {
                    alert(reason);
                });
        },
        addData: function (methodUrl, args, dto, msg) {

            var formattedUrl = commonUtilities.stringFormat(methodUrl, args);

            return res.save({ url: formattedUrl }, dto).$promise
                .then(function (data) {
                    if (msg.length > 5) {
                        commonUtilities.addAlert(msg, 'success');
                    };
                    return data;
                })
                .catch(function (reason) {
                    alert(reason);
                });
        }
    }
}]);