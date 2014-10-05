import logDecorator from './log-decorator';

angular.module('app', [])

    .config(['$provide', function ($provide) {
        $provide.decorator('$log', logDecorator)
    }])

    .run(['$log', function ($log){
        $log.debug('logging with time stamp!');
    }]);