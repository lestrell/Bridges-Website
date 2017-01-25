"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//our root app component
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
//import { bootstrap } from 'angular2/platform/browser';
var Index = (function () {
    function Index() {
    }
    return Index;
}());
Index = __decorate([
    angular2_1.Component({
        selector: 'index',
        template: "\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1>Welcome to BRIDGES!</h1>\n      <p>Bridging Real-world Infrastructure Designed to Goal-align, Engage, and Stimulate.</p>\n      <p><a class=\"btn btn-primary btn-lg\" href=\"#/bridges-setup\" role=\"button\">Get Started &raquo;</a></p>\n    </div>\n  </div>\n\n  <div class=\"\">\n  <!-- <div class=\"container\"> -->\n        <!-- Example row of columns -->\n        <div class=\"row\">\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n            <h2>Goal #1</h2>\n            <p>Providing easy-to-use interfaces to exciting, engaging real-world data (social networks, scientific data, etc), to make it possible for their use in freshmen/sophomore level CS courses.</p>\n            <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n          </div>\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n            <h2>Goal #2</h2>\n            <p>Make it easier to visualize the data structures that students create as part of their assignments in algorithms and data structures courses. BRIDGES is carefully designed to augment the student experience in routine introductory courses in Computer Science.</p>\n            <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n         </div>\n         <div class=\"col-md-3 col-sm-6 col-xs-12\">\n            <h2>C++ and Java</h2>\n            <p>The BRIDGES toolkit provides a set of classes(C++ and Java are supported) that serve as building blocks to the common CS data structures, including lists (arrays, linked lists), tree structures (general trees, binary trees, binary search trees, AVL trees), graphs (adjacency list and adjacency matrix representations) used in freshmen/sohpomore level computer science.</p>\n            <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n          </div>\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n             <h2>Engaging Classrooms</h2>\n             <p>BRIDGES handles the complex data and web interfaces, thereby letting students focus on the core course materials, while providing a more engaging means to view their output on the web (that can be shared).</p>\n             <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n           </div>\n        </div>\n\n        <hr>\n\n      </div> <!-- /container -->\n\n      <h1 class=\"page-header\">BRIDGES Examples</h1>\n\n      <!-- START THE FEATURETTES -->\n\n          <!-- <hr class=\"featurette-divider\"> -->\n\n          <div class=\"row featurette\">\n            <div class=\"col-md-7\">\n              <h2 class=\"featurette-heading\">Example 1. <span class=\"text-muted\"> A singly linked list.</span></h2>\n              <p class=\"lead\">A singly linked list using a reduced version of the IMDB actor/movie dataset(Click on the image to see the live visualization).</p>\n            </div>\n            <div class=\"col-md-5\">\n              <img class=\"featurette-image img-responsive center-block\" src=\"http://bridgesuncc.github.io/img/list.png\" alt=\"Generic placeholder image\">\n            </div>\n          </div>\n\n          <hr class=\"featurette-divider\">\n\n          <div class=\"row featurette\">\n            <div class=\"col-md-7 col-md-push-5\">\n              <h2 class=\"featurette-heading\">Example 2. <span class=\"text-muted\">Bacon Number and Path Computation.</span></h2>\n              <p class=\"lead\">Bacon Number and Path Computation using the IMDB actor/movie dataset. Example illustrates the path between Kevin Bacon and Denzel Washington (Click on the image to see the live visualization).</p>\n            </div>\n            <div class=\"col-md-5 col-md-pull-7\">\n              <img class=\"featurette-image img-responsive center-block\" src=\"http://bridgesuncc.github.io/img/graph2.png\" alt=\"Generic placeholder image\">\n            </div>\n          </div>\n\n          <hr class=\"featurette-divider\">\n\n          <div class=\"row featurette\">\n            <div class=\"col-md-7\">\n              <h2 class=\"featurette-heading\">Example 3. <span class=\"text-muted\">A binary search tree.</span></h2>\n              <p class=\"lead\">A binary search tree built using earthquake magnitudes; data from the USGIS earthquake feed(periodically retrieved and stored on server, so as to always access the most recent quakes). (Click on the image to see the live visualization).</p>\n            </div>\n            <div class=\"col-md-5\">\n              <img class=\"featurette-image img-responsive center-block\" src=\"http://bridgesuncc.github.io/img/tree.png\" alt=\"Generic placeholder image\">\n            </div>\n          </div>\n\n          <hr class=\"featurette-divider\">\n  "
    })
], Index);
exports.Index = Index;
var Assignments = (function () {
    function Assignments() {
    }
    return Assignments;
}());
Assignments = __decorate([
    angular2_1.Component({
        selector: 'assignments',
        template: "\n  <div class=\"row content row-87\">\n  <div class=\"col-md-2\"></div>\n  <!-- <div class=\"col-md-2 sidenav\">\n    <div w3-include-html=\"./left_sidebar.html\"> </div>\n    <script>\n      w3IncludeHTML();\n    </script>\n  </div> -->\n    <div class=\"col-md-8 text-left\">\n    <div>\n    <h3 class = \"sep_heading\">BRIDGES Assignments(UNC Charlotte)</h3>\n    <br>\n    <p class = \"vert_space\"> </p>\n    <h4> Fall 2014: Data Structures </h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/f14/1.pdf\">\n          Project 1: Queue Application</a></li>\n      <li> <a href = \"./project_data/assignments/f14/2.pdf\">\n          Project 2: Binary Search Tree(Earthquake Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f14/3a.pdf\">\n          Project 3-1: Graph Algorithms(IMDB Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f14/3b.pdf\">\n          Project 3-2: Graph Algorithms(Bacon Number)</a></li>\n    </ul>\n    <h4> Spring 2015: Data Structures </h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s15/1.pdf\">\n          Project 1: List Application(IMDB Actor/Movie Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s15/2.pdf\">\n          Project 2: Stacks : Expression Evaluation)</a></li>\n      <li> <a href = \"./project_data/assignments/s15/3a.pdf\">\n          Project 3-1: Binary Search Tree ADT With Earthquake\n                    Data</a></li>\n      <li> <a href = \"./project_data/assignments/s15/3b.pdf\">\n          Project 3-2: Search Tree Operatoins with USGS\n                Earthquake Data)</a></li>\n    </ul>\n    <h4> Spring 2016: Data Structures</h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s16/2214/1-1.pdf\">\n          Project 1-1: Linked Lists: ADT </a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/1-2.pdf\">\n          Project 1-2: Linked List Visualization </a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/1-3.pdf\">\n          Project 1-3: Linked List (IGN Video Games Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/2-1.pdf\">\n          Project 2-1: Binary Search Trees Operations and VisualizationData)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/2-2.pdf\">\n          Project 2-2: Binary Search Trees (USGS Twitter Feed))\n          </a></li>\n    </ul>\n    <h4> Spring 2016: Algorithm Analysis</h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s16/2215/1a.pdf\">\n          Project 1-1: Graphs: Bacon Number(IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/1b.pdf\">\n          Project 1-2: raphs: Bacon Number(IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2a.pdf\">\n          Project 2-1: Binary Search Tree Operatoins With\n                  Earthquake Data</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2b.pdf\">\n          Project 2-2: Search Tree Height/Balance Factor, With\n                  Earthquake Data</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2c.pdf\">\n          Project 2-3: AVL Trees, With Earthquake Data</a></li>\n    </ul>\n    <h4> Fall 2016: Analysis of Algorithms</h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/f16/1a.pdf\">\n          Project 1-1: Graphs: Traversals (IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f16/1b.pdf\">\n          Project 1-2: Graphs: Dijkstra's Shortest Path\n                (Transportation Network) </a></li>\n      <li> <a href = \"./project_data/assignments/f16/2.pdf\">\n          Project 2: Min Heap Operations, with USGS\n              Earthquake Data) </a></li>\n    </ul>\n    </div>\n    <p> <p>\n  </div>\n\n</div>\n"
    })
], Assignments);
exports.Assignments = Assignments;
var Datasets = (function () {
    function Datasets() {
    }
    return Datasets;
}());
Datasets = __decorate([
    angular2_1.Component({
        selector: 'datasets',
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8 text-left\">\n\n  <div>\n  <br>\n  <h3 class = \"sep_heading\">BRIDGES Datasets(UNC Charlotte)</h3><br>\n  <p class = \"vert_space\"> </p>\n  <p> <i> Most BRIDGES datasets are  held  in a Mongo\n    database with BRIDGES API calls to access them, including\n    on-demand streaming data; some of the older datasets that\n    were held in files are included below in their original\n    form. Currently ongoing effort to access\n    <a href=\"http://think.cs.vt.edu/corgis/\"> Corgis Datasets</a>, \t\t\t\tvia BRIDGES.  </i></p>\n      <ul style = \"list-style-type:circle\">\n        <li> <a href = \"./project_data/datasets/large_imdb.txt\">\n          Curated IMDB (Actor/Movie) Data</a></li>\n          <li> USGS Earthquake Twitter Feed Data\n            (Accessed in a sane manner as a list of objects via\n            the BRIDGES API)\n            <a href =\n            \"http://earthquakes-uncc.herokuapp.com/eq/latest/100\">\n            Example command to retrieve 100 most  recent\n            earthquake Tweets</a>\"</li>\n            <li> Video Game Review Data (extracted via BRIDGES API)\n              <a href =\"http://bridgesdata.herokuapp.com/api/games\">\n                Example query to retrieve Video Game Review Data</a></li>\n                <li> Shakespeare Books, Plays, Poems (Metadata only)\n                  (Accessed in a sane manner as a list of objects via\n                  the BRIDGES API)\n                  <a href=\"http://bridgesdata.herokuapp.com/api/shakespeare/\">\n                    Example query to retrieve Video Game Review Data</a></li>\n                    <li> Books\n                      (Accessed in a sane manner as a list of objects via\n                      the BRIDGES API)\n                      <a href = \"http://bridgesdata.herokuapp.com/api/books/\">\n                        Example query to retrieve Book Data</a></li>\n                      </ul>\n                    </div>\n                    <p> </p>\n                    </div>\n                  </div>\n\n  "
    })
], Datasets);
exports.Datasets = Datasets;
var BridgesDesign = (function () {
    function BridgesDesign() {
    }
    return BridgesDesign;
}());
BridgesDesign = __decorate([
    angular2_1.Component({
        selector: 'bridges-design',
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n\n  <div class=\"col-md-8 text-left\">\n\t\t\t<div><br>\n\t\t\t<h3 class = \"sep_heading\">BRIDGES Design</h3><br>\n\t\t\t<!-- <img src = \"./img/bridges_design.jpg\" style = \"vertical-align:middle\"/> -->\n      <img class=\"img-responsive\"  src = \"./img/bridges_design.jpg\" style = \"vertical-align:middle\"/>\n\t\t\t</div>\n\t\t\t<p> </p>\n      <hr>\n\t\t\t<p>\n        In our design the student use our client on their personal computer. This\n  \t\t\tclient program is run via a gradle build script which allows it to be integrated\n  \t\t\tinto any IDE. We chose to do this because we may have students who are using\n  \t\t\tEclipse, JGrasp or Netbeans. This client can connect to the server via an API\n  \t\t\tkey or log in credentials.\n      </p>\n\n      <p>\n  \t\t\tThe server provides three main functions; a crawler which gets data from\n  \t\t\tdata-sources, an API which provides access to data from the client, and a website\n  \t\t\twhere students can view their visualizations, change their log in credentials, or\n  \t\t\tvalidate their account with data-sources. Each time the client makes a request for\n  \t\t\tdata from a data-source we determine whether they have provided us with the\n  \t\t\tauthentication to access the data-source. If they have provided authorized access,\n  \t\t\twe make a request on their behalf; otherwise, we make a request using our public\n  \t\t\taccount. The public account will only be able to fetch from certain providers\n  \t\t\tbecause we have a limit to the amount of requests we can make with the public\n  \t\t\taccount. All requests are cached to prevent request throttling by the\n  \t\t\tdata-source's API. After receiving data, students will be required to manipulate\n  \t\t\tthis data and then make a post request with this data to the server via the API.\n  \t\t\tThese posts will store their submission in a database and generate a link to a\n  \t\t\twebpage, where the data in the database will be visualized using D3.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n  "
    })
], BridgesDesign);
exports.BridgesDesign = BridgesDesign;
var BridgesEvaluation = (function () {
    function BridgesEvaluation() {
    }
    return BridgesEvaluation;
}());
BridgesEvaluation = __decorate([
    angular2_1.Component({
        selector: 'bridges-eval',
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n\n  <div class=\"col-md-8 text-left\">\n      <div>\n      <br>\n      <h3 class = \"sep_heading\">BRIDGES Evaluation (UNC Charlotte)</h3>\n      <br>\n      <p class = \"vert_space\"> </p>\n      <h4> Instruments</h4>\n      <ul style = \"list-style-type:circle\">\n          <li><a href = \"./project_data/eval/instruments/presurvey.pdf\">Attitude Toward Computing(Pre Survey)</a></li>\n          <li><a href = \"./project_data/eval/instruments/postsurvey2214.pdf\">Attitude Toward Computing(Post Survey)</a></li>\n          <li><a href = \"./project_data/eval/instruments/project_survey.pdf\">Project Survey</a></li>\n          <li><a href = \"./project_data/eval/instruments/qbank_mc.pdf\">Knowledge Test Question Bank(Multiple Choice)</a></li>\n          <li><a href = \"./project_data/eval/instruments/qbank_sa.pdf\">Knowledge Test Question Bank(Short Answer)</a></li>\n      </ul>\n\n      <h4> Reports</h4>\n      <ul style=\"list-style-type:circle\"><li><a href = \"./project_data/eval/reports/eval_rpt_f13.pdf\">Fall 2013 Report</a></li>\n          <li> <a href = \"./project_data/eval/reports/eval_rpt_s14.pdf\">Spring 2014 Report</a></li>\n          <li> <a href = \"./project_data/eval/reports/eval_rpt_f14.pdf\">Fall 2014 Report</a></li>\n          <li> <a href = \"./project_data/eval/reports/eval_rpt_s15.pdf\">Spring 2015 Report</a></li>\n          <li> <a href = \"./project_data/eval/reports/eval_rpt_s16.pdf\">Fall 2015 Report</a></li>\n          <li> <a href = \"./project_data/eval/reports/stars_workshop_participant_responses.pdf\">Summer 2015 Stars Workshop Participant Report</a></li>\n      </ul>\n      </div>\n      <p></p>\n    </div>\n</div>\n\n  "
    })
], BridgesEvaluation);
exports.BridgesEvaluation = BridgesEvaluation;
var BridgesSetup = (function () {
    function BridgesSetup() {
    }
    return BridgesSetup;
}());
BridgesSetup = __decorate([
    angular2_1.Component({
        selector: 'bridges-setup',
        template: "\n  <div class=\"row content\">\n    <div class=\"col-md-8 text-left row-87\">\n      <h3 class = \"sep_heading\">BRIDGES:Getting Started(Setup and running BRIDGES Programs)</h3>\n      <p> <i> BRIDGES works with both C++ and Java. Setting up BRIDGES is slightly\n        different , so we provide help pages on building a simple BRIDGES program.\n        Currently detailed help pages for using BRIDGES with Eclipse is provided.\n        See the links below. However, there are many ways to run a BRIDGES program.\n        These distinctions are detailed below:</i> </p>\n          <div>\n            <h4> BRIDGES(Java Version)</h4>\n            <ul>\n                <li> A Jar file is provided(see the links on the left) that contains all the needed\n                  classes to run a BRIDGES program(including on command line, so long as the JAR\n                  is part of your Java class path.\n                </li>\n                <li>\n                    <b>Using BRIDGES Java with Eclipse\n                        <a href = \"#/bridges_setup_java_eclipse\">[Detailed Instructions]</a>\n                    </b>\n                </li>\n                <li>\n                    <b>Using BRIDGES Java with BlueJ\n                        <a href = \"#/bridges_setup_java_bluej\">[Detailed Instructions]</a>\n                    </b>\n                </li>\n                <li>\n                    <b>Using BRIDGES Java with IntelliJ\n                        <a href = \"#/bridges_setup_java_intellij\">[Detailed Instructions]</a>\n                    </b>\n                </li>\n                <li>\n                    <b>Using BRIDGES Java with JGrasp\n                        <a href = \"#/bridges_setup_java_jgrasp\">[Detailed Instructions]</a>\n                    </b>\n                </li>\n                <li> Instructions for additional IDEs will be provided soon.</li>\n            </ul>\n          </div>\n\n          <div>\n                <h4> BRIDGES(C++ Version)</h4>\n                <ul>\n                      <li> The C++ version is provided with a set of templated classes, all housed in\n                              header files. Thus, so long as these header files can be accessed by the BRIDGES\n                              application, that is all that is needed. See the links left for C++ BRIDGES\n                              Zip archive.\n                      </li>\n                      <li> The C++ version works with the <a href = \"https://curl.haxx.se\">CURL</a> library,\n                                for communicating with the web server and transmitting assignments for\n                                visualization.\n                      </li>\n                      <li> For expert users, or users who prefer command line or makefiles, BRIDGES\n                                  programs can be compiled and linked with the curl library and executed, so long\n                                  as the include(both the Bridges and Curl headers) and library options\n                                  (Curl library) are specified based on their local installation.\n                      </li>\n                      <li>\n                          <b>Using BRIDGES C++ with Eclipse\n                                <a href = \"#/bridges_setup_cxx_eclipse\">[Detailed Instructions]</a>\n                          </b>\n                      </li>\n                      <li>\n                          <b>Using BRIDGES C++ with Xcode\n                                <a href = \"#/bridges_setup_cxx_xcode\">[Detailed Instructions]</a>\n                          </b>\n                      </li>\n                      <li> Instructions for additional IDEs will be provided soon.</li>\n                </ul>\n          </div>\n\n\n\n\n  </div>\n\n\n  </div>\n\n  "
    })
], BridgesSetup);
exports.BridgesSetup = BridgesSetup;
var bridges_setup_java_eclipse = (function () {
    function bridges_setup_java_eclipse() {
    }
    return bridges_setup_java_eclipse;
}());
bridges_setup_java_eclipse = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_java_eclipse',
        templateUrl: 'src/pages/setup/bridges_setup_java_eclipse.html'
    })
], bridges_setup_java_eclipse);
exports.bridges_setup_java_eclipse = bridges_setup_java_eclipse;
var bridges_setup_java_bluej = (function () {
    function bridges_setup_java_bluej() {
    }
    return bridges_setup_java_bluej;
}());
bridges_setup_java_bluej = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_java_bluej',
        templateUrl: 'src/pages/setup/bridges_setup_java_bluej.html'
    })
], bridges_setup_java_bluej);
exports.bridges_setup_java_bluej = bridges_setup_java_bluej;
var bridges_setup_java_intellij = (function () {
    function bridges_setup_java_intellij() {
    }
    return bridges_setup_java_intellij;
}());
bridges_setup_java_intellij = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_java_intellij',
        templateUrl: 'src/pages/setup/bridges_setup_java_intellij.html'
    })
], bridges_setup_java_intellij);
exports.bridges_setup_java_intellij = bridges_setup_java_intellij;
var bridges_setup_java_jgrasp = (function () {
    function bridges_setup_java_jgrasp() {
    }
    return bridges_setup_java_jgrasp;
}());
bridges_setup_java_jgrasp = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_java_jgrasp',
        templateUrl: 'src/pages/setup/bridges_setup_java_jgrasp.html'
    })
], bridges_setup_java_jgrasp);
exports.bridges_setup_java_jgrasp = bridges_setup_java_jgrasp;
var bridges_setup_cxx_eclipse = (function () {
    function bridges_setup_cxx_eclipse() {
    }
    return bridges_setup_cxx_eclipse;
}());
bridges_setup_cxx_eclipse = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_cxx_eclipse',
        templateUrl: 'src/pages/setup/bridges_setup_cxx_eclipse.html'
    })
], bridges_setup_cxx_eclipse);
exports.bridges_setup_cxx_eclipse = bridges_setup_cxx_eclipse;
var bridges_setup_cxx_xcode = (function () {
    function bridges_setup_cxx_xcode() {
    }
    return bridges_setup_cxx_xcode;
}());
bridges_setup_cxx_xcode = __decorate([
    angular2_1.Component({
        selector: 'bridges_setup_cxx_xcode',
        templateUrl: 'src/pages/setup/bridges_setup_cxx_xcode.html'
    })
], bridges_setup_cxx_xcode);
exports.bridges_setup_cxx_xcode = bridges_setup_cxx_xcode;
var BridgesTeam = (function () {
    function BridgesTeam() {
    }
    return BridgesTeam;
}());
BridgesTeam = __decorate([
    angular2_1.Component({
        selector: 'bridges-team',
        template: "\n  <h2 class=\"sub-header\">Faculty Investigators</h2>\n<div class=\"container m-t-md\">\n  <!-- First row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-4\">\n      <!-- Card -->\n      <article class=\"card animated fadeInLeft\">\n        <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/kalpathi.jpg\" alt=\"Deer in nature\" />\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n          <h6 class=\"text-muted\">Associate Professor</h6>\n          <p class=\"card-text\">Charlotte Visualization Center<br>\n            Department of Computer Science<br>\n            The University of North Carolina at Charlotte<br>\n            email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n          </div>\n        </article><!-- .end Card -->\n      </div>\n\n      <div class=\"col-xs-12 col-md-4\">\n        <!-- Card -->\n        <article class=\"card animated fadeInLeft\">\n          <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/jamie.jpg\" alt=\"Deer in nature\" />\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n            <p class=\"card-text\">Charlotte Visualization Center<br>\n              Department of Computer Science<br>\n              The University of North Carolina at Charlotte<br>\n              email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n            </div>\n          </article><!-- .end Card -->\n        </div>\n\n        <div class=\"col-xs-12 col-md-4\">\n          <!-- Card -->\n          <article class=\"card animated fadeInLeft\">\n            <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/michael.jpg\" alt=\"Deer in nature\" />\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n              <h6 class=\"text-muted\">Associate Professor</h6>\n              <p class=\"card-text\">Charlotte Visualization Center<br>\n                Department of Computer Science<br>\n                The University of North Carolina at Charlotte<br>\n                email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n              </div>\n            </article><!-- .end Card -->\n          </div>\n\n          <div class=\"col-xs-12 col-md-4\">\n            <!-- Card -->\n            <article class=\"card animated fadeInLeft\">\n              <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/robert.png\" alt=\"Deer in nature\" />\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                <h6 class=\"text-muted\">Associate Professor</h6>\n                <p class=\"card-text\">Charlotte Visualization Center<br>\n                  Department of Computer Science<br>\n                  The University of North Carolina at Charlotte<br>\n                  email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                </div>\n              </article><!-- .end Card -->\n            </div>\n\n            <div class=\"col-xs-12 col-md-4\">\n              <!-- Card -->\n              <article class=\"card animated fadeInLeft\">\n                <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/paula.jpg\" alt=\"Deer in nature\" />\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                  <h6 class=\"text-muted\">Associate Professor</h6>\n                  <p class=\"card-text\">Charlotte Visualization Center<br>\n                    Department of Computer Science<br>\n                    The University of North Carolina at Charlotte<br>\n                    email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                  </div>\n                </article><!-- .end Card -->\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n          <h2 class=\"sub-header\">Student Investigators</h2>\n          <div class=\"container m-t-md\">\n            <!-- First row -->\n            <div class=\"row\">\n\n              <div class=\"col-xs-12 col-md-4\">\n                <!-- Card -->\n                <article class=\"card animated fadeInLeft\">\n                  <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/burlinson.jpg\" alt=\"Deer in nature\" />\n                  <div class=\"card-block\">\n                    <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                    <h6 class=\"text-muted\">Associate Professor</h6>\n                    <p class=\"card-text\">Charlotte Visualization Center<br>\n                      Department of Computer Science<br>\n                      The University of North Carolina at Charlotte<br>\n                      email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                    </div>\n                  </article><!-- .end Card -->\n                </div>\n\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <!-- Card -->\n                  <article class=\"card animated fadeInLeft\">\n                    <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/mmehedint.jpg\" alt=\"Deer in nature\" />\n                    <div class=\"card-block\">\n                      <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n                      <h6 class=\"text-muted\">Associate Professor</h6>\n                      <p class=\"card-text\">Charlotte Visualization Center<br>\n                        Department of Computer Science<br>\n                        The University of North Carolina at Charlotte<br>\n                        email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n                      </div>\n                    </article><!-- .end Card -->\n                  </div>\n\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <!-- Card -->\n                    <article class=\"card animated fadeInLeft\">\n                      <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/dakota.jpg\" alt=\"Deer in nature\" />\n                      <div class=\"card-block\">\n                        <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                        <h6 class=\"text-muted\">Associate Professor</h6>\n                        <p class=\"card-text\">Charlotte Visualization Center<br>\n                          Department of Computer Science<br>\n                          The University of North Carolina at Charlotte<br>\n                          email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                        </div>\n                      </article><!-- .end Card -->\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n            <h2 class=\"sub-header\">Past Students</h2>\n            <div class=\"container m-t-md\">\n              <!-- First row -->\n              <div class=\"row\">\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <!-- Card -->\n                  <article class=\"card animated fadeInLeft\">\n                    <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/stephen.jpg\" alt=\"Deer in nature\" />\n                    <div class=\"card-block\">\n                      <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                      <h6 class=\"text-muted\">Associate Professor</h6>\n                      <p class=\"card-text\">Charlotte Visualization Center<br>\n                        Department of Computer Science<br>\n                        The University of North Carolina at Charlotte<br>\n                        email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                      </div>\n                    </article><!-- .end Card -->\n                  </div>\n\n\n\n\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <!-- Card -->\n                    <article class=\"card animated fadeInLeft\">\n                      <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/sean.jpeg\" alt=\"Deer in nature\" />\n                      <div class=\"card-block\">\n                        <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n                        <h6 class=\"text-muted\">Associate Professor</h6>\n                        <p class=\"card-text\">Charlotte Visualization Center<br>\n                          Department of Computer Science<br>\n                          The University of North Carolina at Charlotte<br>\n                          email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n                        </div>\n                      </article><!-- .end Card -->\n                    </div>\n\n\n\n\n                  </div>\n                </div>\n\n  "
    })
], BridgesTeam);
exports.BridgesTeam = BridgesTeam;
var Overview = (function () {
    function Overview() {
    }
    return Overview;
}());
Overview = __decorate([
    angular2_1.Component({
        selector: 'overview',
        templateUrl: 'src/pages/tutorial/overview.html'
    })
], Overview);
exports.Overview = Overview;
var BST = (function () {
    function BST() {
    }
    return BST;
}());
BST = __decorate([
    angular2_1.Component({
        selector: 'binary-search-tree',
        templateUrl: 'src/pages/tutorial/binary-search-tree.html'
    })
], BST);
exports.BST = BST;
var BT = (function () {
    function BT() {
    }
    return BT;
}());
BT = __decorate([
    angular2_1.Component({
        selector: 'binary-tree',
        templateUrl: 'src/pages/tutorial/binary-tree.html'
    })
], BT);
exports.BT = BT;
var AVLT = (function () {
    function AVLT() {
    }
    return AVLT;
}());
AVLT = __decorate([
    angular2_1.Component({
        selector: 'avl-tree',
        templateUrl: 'src/pages/tutorial/avl-tree.html'
    })
], AVLT);
exports.AVLT = AVLT;
var SL = (function () {
    function SL() {
    }
    return SL;
}());
SL = __decorate([
    angular2_1.Component({
        selector: 'singly-list',
        templateUrl: 'src/pages/tutorial/singly-list.html'
    })
], SL);
exports.SL = SL;
var DL = (function () {
    function DL() {
    }
    return DL;
}());
DL = __decorate([
    angular2_1.Component({
        selector: 'doubly-list',
        templateUrl: 'src/pages/tutorial/doubly-list.html'
    })
], DL);
exports.DL = DL;
var CSL = (function () {
    function CSL() {
    }
    return CSL;
}());
CSL = __decorate([
    angular2_1.Component({
        selector: 'circular-singly-list',
        templateUrl: 'src/pages/tutorial/circular-singly-list.html'
    })
], CSL);
exports.CSL = CSL;
var CDL = (function () {
    function CDL() {
    }
    return CDL;
}());
CDL = __decorate([
    angular2_1.Component({
        selector: 'circular-doubly-list',
        templateUrl: 'src/pages/tutorial/circular-doubly-list.html'
    })
], CDL);
exports.CDL = CDL;
var GRAPH = (function () {
    function GRAPH() {
    }
    return GRAPH;
}());
GRAPH = __decorate([
    angular2_1.Component({
        selector: 'graph',
        templateUrl: 'src/pages/tutorial/graph.html'
    })
], GRAPH);
exports.GRAPH = GRAPH;
var VISUAL = (function () {
    function VISUAL() {
    }
    return VISUAL;
}());
VISUAL = __decorate([
    angular2_1.Component({
        selector: 'visualizations',
        templateUrl: 'src/pages/tutorial/visualizations.html'
    })
], VISUAL);
exports.VISUAL = VISUAL;
var ARRAY = (function () {
    function ARRAY() {
    }
    return ARRAY;
}());
ARRAY = __decorate([
    angular2_1.Component({
        selector: 'array',
        templateUrl: 'src/pages/tutorial/array.html'
    })
], ARRAY);
exports.ARRAY = ARRAY;
var ARRAY2D = (function () {
    function ARRAY2D() {
    }
    return ARRAY2D;
}());
ARRAY2D = __decorate([
    angular2_1.Component({
        selector: 'array2d',
        templateUrl: 'src/pages/tutorial/array2d.html'
    })
], ARRAY2D);
exports.ARRAY2D = ARRAY2D;
var ARRAY3D = (function () {
    function ARRAY3D() {
    }
    return ARRAY3D;
}());
ARRAY3D = __decorate([
    angular2_1.Component({
        selector: 'array3d',
        templateUrl: 'src/pages/tutorial/array3d.html'
    })
], ARRAY3D);
exports.ARRAY3D = ARRAY3D;
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    angular2_1.Component({
        selector: 'my-app',
        directives: [router_1.RouterOutlet, router_1.RouterLink],
        template: "<router-outlet></router-outlet>"
    }),
    router_1.RouteConfig([
        { path: '/', component: Index },
        { path: '/assignments', component: Assignments },
        { path: '/bridges-design', component: BridgesDesign },
        { path: '/bridges-team', component: BridgesTeam },
        { path: '/bridges-eval', component: BridgesEvaluation },
        { path: '/bridges-setup', component: BridgesSetup },
        { path: '/datasets', component: Datasets },
        { path: '/tutorial', component: Overview },
        { path: '/tutorial/trees/binary-search-tree', component: BST },
        { path: '/tutorial/trees/binary-tree', component: BT },
        { path: '/tutorial/trees/avl-tree', component: AVLT },
        { path: '/tutorial/lists/singly-list', component: SL },
        { path: '/tutorial/lists/doubly-list', component: DL },
        { path: '/tutorial/lists/circular-singly-list', component: CSL },
        { path: '/tutorial/lists/circular-doubly-list', component: CDL },
        { path: '/tutorial/graph', component: GRAPH },
        { path: '/tutorial/visualizations', component: VISUAL },
        { path: '/tutorial/arrays/array', component: ARRAY },
        { path: '/tutorial/arrays/2darray', component: ARRAY2D },
        { path: '/tutorial/arrays/3darray', component: ARRAY3D },
        { path: '/bridges_setup_cxx_eclipse', component: bridges_setup_cxx_eclipse },
        { path: '/bridges_setup_cxx_xcode', component: bridges_setup_cxx_xcode },
        { path: '/bridges_setup_java_bluej', component: bridges_setup_java_bluej },
        { path: '/bridges_setup_java_eclipse', component: bridges_setup_java_eclipse },
        { path: '/bridges_setup_java_intellij', component: bridges_setup_java_intellij },
        { path: '/bridges_setup_java_jgrasp', component: bridges_setup_java_jgrasp }
    ])
], App);
exports.App = App;
// App.parameters = [Router];
// export { App };
