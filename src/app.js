"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var Index = (function () {
    function Index() {
    }
    return Index;
}());
Index = __decorate([
    angular2_1.Component({
        selector: 'index',
        templateUrl: 'src/pages/index.html'
    }),
    __metadata("design:paramtypes", [])
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
        template: "\n  <div class=\"row content row-87\">\n  <div class=\"col-md-2\"></div>\n  <!-- <div class=\"col-md-2 sidenav\">\n    <div w3-include-html=\"./left_sidebar.html\"> </div>\n    <script>\n      w3IncludeHTML();\n    </script>\n  </div> -->\n    <div class=\"col-md-8 text-left\">\n    <div>\n    <h3 class = \"sep_heading\">BRIDGES Assignments(UNC Charlotte)</h3>\n    </br>\n    <p class = \"vert_space\"> </p>\n    <h4> Fall 2014: Data Structures </h4>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/f14/1.pdf\">\n          Project 1: Queue Application</a></li>\n      <li> <a href = \"./project_data/assignments/f14/2.pdf\">\n          Project 2: Binary Search Tree(Earthquake Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f14/3a.pdf\">\n          Project 3-1: Graph Algorithms(IMDB Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f14/3b.pdf\">\n          Project 3-2: Graph Algorithms(Bacon Number)</a></li>\n    </ul>\n    <h4> Spring 2015: Data Structures </h5>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s15/1.pdf\">\n          Project 1: List Application(IMDB Actor/Movie Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s15/2.pdf\">\n          Project 2: Stacks : Expression Evaluation)</a></li>\n      <li> <a href = \"./project_data/assignments/s15/3a.pdf\">\n          Project 3-1: Binary Search Tree ADT With Earthquake\n                    Data</a></li>\n      <li> <a href = \"./project_data/assignments/s15/3b.pdf\">\n          Project 3-2: Search Tree Operatoins with USGS\n                Earthquake Data)</a></li>\n    </ul>\n    <h4> Spring 2016: Data Structures</h5>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s16/2214/1-1.pdf\">\n          Project 1-1: Linked Lists: ADT </a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/1-2.pdf\">\n          Project 1-2: Linked List Visualization </a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/1-3.pdf\">\n          Project 1-3: Linked List (IGN Video Games Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/2-1.pdf\">\n          Project 2-1: Binary Search Trees Operations and VisualizationData)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2214/2-2.pdf\">\n          Project 2-2: Binary Search Trees (USGS Twitter Feed))\n          </a></li>\n    </ul>\n    <h4> Spring 2016: Algorithm Analysis</h5>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/s16/2215/1a.pdf\">\n          Project 1-1: Graphs: Bacon Number(IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/1b.pdf\">\n          Project 1-2: raphs: Bacon Number(IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2a.pdf\">\n          Project 2-1: Binary Search Tree Operatoins With\n                  Earthquake Data</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2b.pdf\">\n          Project 2-2: Search Tree Height/Balance Factor, With\n                  Earthquake Data</a></li>\n      <li> <a href = \"./project_data/assignments/s16/2215/2c.pdf\">\n          Project 2-3: AVL Trees, With Earthquake Data</a></li>\n    </ul>\n    <h4> Fall 2016: Analysis of Algorithms</h5>\n    <ul style = \"list-style-type:circle\">\n      <li> <a href = \"./project_data/assignments/f16/1a.pdf\">\n          Project 1-1: Graphs: Traversals (IMDB Actor/Movie\n                    Data)</a></li>\n      <li> <a href = \"./project_data/assignments/f16/1b.pdf\">\n          Project 1-2: Graphs: Dijkstra's Shortest Path\n                (Transportation Network) </a></li>\n      <li> <a href = \"./project_data/assignments/f16/2.pdf\">\n          Project 2: Min Heap Operations, with USGS\n              Earthquake Data) </a></li>\n    </ul>\n    </div>\n    <p> <p>\n  </div>\n\n</div>\n"
    }),
    __metadata("design:paramtypes", [])
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
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n  <!-- <div class=\"col-md-2 sidenav\">\n  <div w3-include-html=\"./left_sidebar.html\"> </div>\n  <script>\n  w3IncludeHTML();\n</script>\n</div> -->\n\n\n\n\n<div class=\"col-md-8 text-left\">\n\n  <div>\n  </br>\n  <h3 class = \"sep_heading\">BRIDGES Datasets(UNC Charlotte)</h3></br>\n  <p class = \"vert_space\"> </p>\n  <p> <i> Most BRIDGES datasets are  held  in a Mongo\n    database with BRIDGES API calls to access them, including\n    on-demand streaming data; some of the older datasets that\n    were held in files are included below in their original\n    form. Currently ongoing effort to access\n    <a href=\"http://think.cs.vt.edu/corgis/\"> Corgis Datasets</a>, \t\t\t\tvia BRIDGES.  </i><p>\n      <ul style = \"list-style-type:circle\">\n        <li> <a href = \"./project_data/datasets/large_imdb.txt\">\n          Curated IMDB (Actor/Movie) Data</a></li>\n          <li> USGS Earthquake Twitter Feed Data\n            (Accessed in a sane manner as a list of objects via\n            the BRIDGES API)\n            <a href =\n            \"http://earthquakes-uncc.herokuapp.com/eq/latest/100\">\n            Example command to retrieve 100 most  recent\n            earthquake Tweets</a>\"</li>\n            <li> Video Game Review Data (extracted via BRIDGES API)\n              <a href =\"http://bridgesdata.herokuapp.com/api/games\">\n                Example query to retrieve Video Game Review Data</a></li>\n                <li> Shakespeare Books, Plays, Poems (Metadata only)\n                  (Accessed in a sane manner as a list of objects via\n                  the BRIDGES API)\n                  <a href=\"http://bridgesdata.herokuapp.com/api/shakespeare/\">\n                    Example query to retrieve Video Game Review Data</a></li>\n                    <li> Books\n                      (Accessed in a sane manner as a list of objects via\n                      the BRIDGES API)\n                      <a href = \"http://bridgesdata.herokuapp.com/api/books/\">\n                        Example query to retrieve Book Data</a></li>\n                      </ul>\n                    </div>\n                    <p> <p>\n                    </div>\n                  </div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
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
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n  <!-- <div class=\"col-md-2 sidenav\">\n    <div w3-include-html=\"./left_sidebar.html\"> </div>\n    <script>\n      w3IncludeHTML();\n    </script>\n  </div> -->\n\n\n\n\n\n  <div class=\"col-md-8 text-left\">\n\t\t\t<div></br>\n\t\t\t<h3 class = \"sep_heading\">BRIDGES Design</h3></br>\n\t\t\t<!-- <img src = \"./img/bridges_design.jpg\" style = \"vertical-align:middle\"></img> -->\n      <img class=\"img-responsive\"  src = \"./img/bridges_design.jpg\" style = \"vertical-align:middle\"></img>\n\t\t\t</div>\n\t\t\t<p> <p>\n        <hr>\n\t\t\t<p>In our design the student use our client on their personal computer. This\n\t\t\tclient program is run via a gradle build script which allows it to be integrated\n\t\t\tinto any IDE. We chose to do this because we may have students who are using\n\t\t\tEclipse, JGrasp or Netbeans. This client can connect to the server via an API\n\t\t\tkey or log in credentials. <p>\n\n\t\t\tThe server provides three main functions; a crawler which gets data from\n\t\t\tdata-sources, an API which provides access to data from the client, and a website\n\t\t\twhere students can view their visualizations, change their log in credentials, or\n\t\t\tvalidate their account with data-sources. Each time the client makes a request for\n\t\t\tdata from a data-source we determine whether they have provided us with the\n\t\t\tauthentication to access the data-source. If they have provided authorized access,\n\t\t\twe make a request on their behalf; otherwise, we make a request using our public\n\t\t\taccount. The public account will only be able to fetch from certain providers\n\t\t\tbecause we have a limit to the amount of requests we can make with the public\n\t\t\taccount. All requests are cached to prevent request throttling by the\n\t\t\tdata-source's API. After receiving data, students will be required to manipulate\n\t\t\tthis data and then make a post request with this data to the server via the API.\n\t\t\tThese posts will store their submission in a database and generate a link to a\n\t\t\twebpage, where the data in the database will be visualized using D3.\n\t\t\t<p>\n\t\t</div>\n\t</div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
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
        template: "\n  <div class=\"row row-87 content\">\n  <div class=\"col-md-2\"></div>\n  <!-- <div class=\"col-md-2 sidenav\">\n    <div w3-include-html=\"./left_sidebar.html\"> </div>\n    <script>\n      w3IncludeHTML();\n    </script>\n  </div> -->\n\n  <div class=\"col-md-8 text-left\">\n      <div>\n      </br>\n      <h3 class = \"sep_heading\">BRIDGES Evaluation (UNC Charlotte)</h3>\n      </br>\n      <p class = \"vert_space\"> </p>\n      <h4> Instruments</h4>\n      <ul style = \"list-style-type:circle\">\n        <li> <a href = \"./project_data/eval/instruments/presurvey.pdf\">\n            Attitude Toward Computing(Pre Survey)</a></li>\n        <li> <a href =\n            \"./project_data/eval/instruments/postsurvey2214.pdf\">\n            Attitude Toward Computing(Post Survey)</a></li>\n        <li>\n        <a href = \"./project_data/eval/instruments/project_survey.pdf\">\n            Project Survey</a></li>\n        <li> <a href = \"./project_data/eval/instruments/qbank_mc.pdf\">\n            Knowledge Test Question Bank(Multiple Choice)</a></li>\n        <li><a href = \"./project_data/eval/instruments/qbank_sa.pdf\">\n            Knowledge Test Question Bank(Short Answer)</a></li>\n      </ul>\n      <h4> Reports</h4>\n      <ul style = \"list-style-type:circle\">\n        <li> <a href = \"./project_data/eval/reports/eval_rpt_f13.pdf\">\n            Fall 2013 Report</a></li>\n        <li> <a href = \"./project_data/eval/reports/eval_rpt_s14.pdf\">\n            Spring 2014 Report</a></li>\n        <li> <a href = \"./project_data/eval/reports/eval_rpt_f14.pdf\">\n            Fall 2014 Report</a></li>\n        <li> <a href = \"./project_data/eval/reports/eval_rpt_s15.pdf\">\n            Spring 2015 Report</a></li>\n        <li> <a href = \"./project_data/eval/reports/eval_rpt_s16.pdf\">\n            Fall 2015 Report</a></li>\n        <li> <a href = \"./project_data/eval/reports/stars_workshop_participant_responses.pdf\">\n            Summer 2015 Stars Workshop Participant Report</a></li>\n      </ul>\n      </div>\n      <p> <p>\n    </div>\n\n\n\n\n</div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
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
        template: "\n\n\n  <div class=\"row content\">\n    <!-- <div class=\"col-md-2\"></div> -->\n    <!-- <div class=\"col-md-2 sidenav\">\n      <div w3-include-html=\"./left_sidebar.html\"> </div>\n      <script>\n        w3IncludeHTML();\n      </script>\n    </div> -->\n\n\n    <div class=\"col-md-8 text-left row-87\">\n      <h3 class = \"sep_heading\">BRIDGES:Getting Started(Setup and running BRIDGES Programs)</h3>\n      <p> <i> BRIDGES works with both C++ and Java. Setting up BRIDGES is slightly\n        different , so we provide help pages on building a simple BRIDGES program.\n        Currently detailed help pages for using BRIDGES with Eclipse is provided.\n        See the links below. However, there are many ways to run a BRIDGES program.\n        These distinctions are detailed below:</i> <p>\n          <div>\n            <h4> BRIDGES(Java Version)</h4>\n            <ul>\n              <li> A Jar file is provided(see the links on the left) that contains all the needed\n                classes to run a BRIDGES program(including on command line, so long as the JAR\n                is part of your Java class path.\n                <li> <b>Using BRIDGES Java with Eclipse <a href = \"./bridges_setup_java_eclipse.html\">\n                  [Detailed Instructions]</a></b></li>\n                  <li> <b>Using BRIDGES Java with BlueJ <a href = \"./bridges_setup_java_bluej.html\">\n                    [Detailed Instructions]</a></b></li>\n                    <li> <b>Using BRIDGES Java with IntelliJ <a href = \"./bridges_setup_java_intellij.html\">\n                      [Detailed Instructions]</a></b></li>\n                      <li> <b>Using BRIDGES Java with JGrasp <a href = \"./bridges_setup_java_jgrasp.html\">\n                        [Detailed Instructions]</a></b></li>\n                        <li> Instructions for additional IDEs will be provided soon.</li>\n                        </ul>\n                      </div>\n                      <div>\n                        <h4> BRIDGES(C++ Version)</h4>\n                        <ul>\n                          <li> The C++ version is provided with a set of templated classes, all housed in\n                            header files. Thus, so long as these header files can be accessed by the BRIDGES\n                            application, that is all that is needed. See the links left for C++ BRIDGES\n                            Zip archive.</li>\n                            <li> The C++ version works with the <a href = \"https://curl.haxx.se\">CURL</a> library,\n                              for communicating with the web server and transmitting assignments for\n                              visualization.</li>\n                              <li> For expert users, or users who prefer command line or makefiles, BRIDGES\n                                programs can be compiled and linked with the curl library and executed, so long\n                                as the include(both the Bridges and Curl headers) and library options\n                                (Curl library) are specified based on their local installation.</li>\n                                <li> <b>Using BRIDGES C++ with Eclipse\n                                  <a href = \"./bridges_setup_cxx_eclipse.html\">[Detailed Instructions]</a></b></li>\n                                  <li> <b>Using BRIDGES C++ with Xcode\n                                    <a href = \"./bridges_setup_cxx_xcode.html\">[Detailed Instructions]</a></b></li>\n                                    <li> Instructions for additional IDEs will be provided soon.</li>\n                                    </ul>\n                                  </div>\n\n\n\n\n  </div>\n\n  <!--footer-->\n  <footer w3-include-html=\"template/footer.html\"></footer>\n\n\n  </div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
], BridgesSetup);
exports.BridgesSetup = BridgesSetup;
var BridgesTeam = (function () {
    function BridgesTeam() {
    }
    return BridgesTeam;
}());
BridgesTeam = __decorate([
    angular2_1.Component({
        selector: 'bridges-team',
        template: "\n  <h2 class=\"sub-header\">Faculty Investigators</h2>\n<div class=\"container m-t-md\">\n  <!-- First row -->\n  <div class=\"row\">\n\n\n\n    <div class=\"col-xs-12 col-md-4\">\n      <!-- Card -->\n      <article class=\"card animated fadeInLeft\">\n        <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/kalpathi.jpg\" alt=\"Deer in nature\" />\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n          <h6 class=\"text-muted\">Associate Professor</h6>\n          <p class=\"card-text\">Charlotte Visualization Center<br>\n            Department of Computer Science<br>\n            The University of North Carolina at Charlotte<br>\n            email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n          </div>\n        </article><!-- .end Card -->\n      </div>\n\n\n\n\n\n      <div class=\"col-xs-12 col-md-4\">\n        <!-- Card -->\n        <article class=\"card animated fadeInLeft\">\n          <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/jamie.jpg\" alt=\"Deer in nature\" />\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n            <p class=\"card-text\">Charlotte Visualization Center<br>\n              Department of Computer Science<br>\n              The University of North Carolina at Charlotte<br>\n              email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n            </div>\n          </article><!-- .end Card -->\n        </div>\n\n\n\n\n\n        <div class=\"col-xs-12 col-md-4\">\n          <!-- Card -->\n          <article class=\"card animated fadeInLeft\">\n            <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/michael.jpg\" alt=\"Deer in nature\" />\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n              <h6 class=\"text-muted\">Associate Professor</h6>\n              <p class=\"card-text\">Charlotte Visualization Center<br>\n                Department of Computer Science<br>\n                The University of North Carolina at Charlotte<br>\n                email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n              </div>\n            </article><!-- .end Card -->\n          </div>\n\n\n\n\n\n          <div class=\"col-xs-12 col-md-4\">\n            <!-- Card -->\n            <article class=\"card animated fadeInLeft\">\n              <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/robert.png\" alt=\"Deer in nature\" />\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                <h6 class=\"text-muted\">Associate Professor</h6>\n                <p class=\"card-text\">Charlotte Visualization Center<br>\n                  Department of Computer Science<br>\n                  The University of North Carolina at Charlotte<br>\n                  email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                </div>\n              </article><!-- .end Card -->\n            </div>\n\n\n\n\n\n            <div class=\"col-xs-12 col-md-4\">\n              <!-- Card -->\n              <article class=\"card animated fadeInLeft\">\n                <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/paula.jpg\" alt=\"Deer in nature\" />\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                  <h6 class=\"text-muted\">Associate Professor</h6>\n                  <p class=\"card-text\">Charlotte Visualization Center<br>\n                    Department of Computer Science<br>\n                    The University of North Carolina at Charlotte<br>\n                    email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                  </div>\n                </article><!-- .end Card -->\n              </div>\n\n\n\n            </div>\n          </div>\n\n\n\n          <h2 class=\"sub-header\">Student Investigators</h2>\n          <div class=\"container m-t-md\">\n            <!-- First row -->\n            <div class=\"row\">\n\n\n\n              <div class=\"col-xs-12 col-md-4\">\n                <!-- Card -->\n                <article class=\"card animated fadeInLeft\">\n                  <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/burlinson.jpg\" alt=\"Deer in nature\" />\n                  <div class=\"card-block\">\n                    <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                    <h6 class=\"text-muted\">Associate Professor</h6>\n                    <p class=\"card-text\">Charlotte Visualization Center<br>\n                      Department of Computer Science<br>\n                      The University of North Carolina at Charlotte<br>\n                      email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                    </div>\n                  </article><!-- .end Card -->\n                </div>\n\n\n\n\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <!-- Card -->\n                  <article class=\"card animated fadeInLeft\">\n                    <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/mmehedint.jpg\" alt=\"Deer in nature\" />\n                    <div class=\"card-block\">\n                      <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n                      <h6 class=\"text-muted\">Associate Professor</h6>\n                      <p class=\"card-text\">Charlotte Visualization Center<br>\n                        Department of Computer Science<br>\n                        The University of North Carolina at Charlotte<br>\n                        email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n                      </div>\n                    </article><!-- .end Card -->\n                  </div>\n\n\n\n\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <!-- Card -->\n                    <article class=\"card animated fadeInLeft\">\n                      <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/dakota.jpg\" alt=\"Deer in nature\" />\n                      <div class=\"card-block\">\n                        <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                        <h6 class=\"text-muted\">Associate Professor</h6>\n                        <p class=\"card-text\">Charlotte Visualization Center<br>\n                          Department of Computer Science<br>\n                          The University of North Carolina at Charlotte<br>\n                          email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                        </div>\n                      </article><!-- .end Card -->\n                    </div>\n\n\n\n\n\n\n                  </div>\n                </div>\n\n\n\n\n                <h2 class=\"sub-header\">Past Students</h2>\n                <div class=\"container m-t-md\">\n                  <!-- First row -->\n                  <div class=\"row\">\n\n                    <div class=\"col-xs-12 col-md-4\">\n                      <!-- Card -->\n                      <article class=\"card animated fadeInLeft\">\n                        <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/stephen.jpg\" alt=\"Deer in nature\" />\n                        <div class=\"card-block\">\n                          <h4 class=\"card-title\">Dr. Kalpathi Subramanian</h4>\n                          <h6 class=\"text-muted\">Associate Professor</h6>\n                          <p class=\"card-text\">Charlotte Visualization Center<br>\n                            Department of Computer Science<br>\n                            The University of North Carolina at Charlotte<br>\n                            email: <a href = \"mailto:krs@uncc.edu\">krs@uncc.edu</a><br> </p>\n                          </div>\n                        </article><!-- .end Card -->\n                      </div>\n\n\n\n\n\n                      <div class=\"col-xs-12 col-md-4\">\n                        <!-- Card -->\n                        <article class=\"card animated fadeInLeft\">\n                          <img width=\"300\" height=\"300\" class=\"card-img-top img-responsive\" src=\"./img/sean.jpeg\" alt=\"Deer in nature\" />\n                          <div class=\"card-block\">\n                            <h4 class=\"card-title\">\tDr. Jamie Payton </h4>\n                            <h6 class=\"text-muted\">Associate Professor</h6>\n                            <p class=\"card-text\">Charlotte Visualization Center<br>\n                              Department of Computer Science<br>\n                              The University of North Carolina at Charlotte<br>\n                              email: <a href = \"mailto:krs@uncc.edu\">payton@uncc.edu</a><br> </p>\n                            </div>\n                          </article><!-- .end Card -->\n                        </div>\n\n\n\n\n\n\n\n\n                      </div>\n                    </div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
], BridgesTeam);
exports.BridgesTeam = BridgesTeam;
var Tutorial = (function () {
    function Tutorial() {
    }
    return Tutorial;
}());
Tutorial = __decorate([
    angular2_1.Component({
        selector: 'tutorial',
        templateUrl: 'src/pages/tutorial/tutorial.html'
    }),
    __metadata("design:paramtypes", [])
], Tutorial);
exports.Tutorial = Tutorial;
var BST = (function () {
    function BST() {
    }
    return BST;
}());
BST = __decorate([
    angular2_1.Component({
        selector: 'binary-search-tree',
        templateUrl: 'src/pages/tutorial/binary-search-tree.html'
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
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
    }),
    __metadata("design:paramtypes", [])
], VISUAL);
exports.VISUAL = VISUAL;
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
        { path: '/', component: Index, data: { title: 'Home' } },
        { path: '/assignments', component: Assignments, data: { title: 'Assignments' } },
        { path: '/bridges-design', component: BridgesDesign, data: { title: 'BridgesDesign' } },
        { path: '/bridges-team', component: BridgesTeam, data: { title: 'BridgesTeam' } },
        { path: '/bridges-eval', component: BridgesEvaluation, data: { title: 'BridgesEvaluation' } },
        { path: '/bridges-setup', component: BridgesSetup, data: { title: 'BridgesSetup' } },
        { path: '/datasets', component: Datasets, data: { title: 'Datasets' } },
        { path: '/tutorial', component: Tutorial, data: { title: 'Tutorial' } },
        { path: '/binary-search-tree', component: BST, data: { title: 'BST' } },
        { path: '/binary-tree', component: BT, data: { title: 'BT' } },
        { path: '/avl-tree', component: AVLT, data: { title: 'AVLT' } },
        { path: '/singly-list', component: SL, data: { title: 'SL' } },
        { path: '/doubly-list', component: DL, data: { title: 'DL' } },
        { path: '/circular-singly-list', component: CSL, data: { title: 'CSL' } },
        { path: '/circular-doubly-list', component: CDL, data: { title: 'CDL' } },
        { path: '/graph', component: GRAPH, data: { title: 'GRAPH' } },
        { path: '/visualizations', component: VISUAL, data: { title: 'VISUALIZATIONS' } }
    ]),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
