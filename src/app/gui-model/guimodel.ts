﻿export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Lorenzos Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
					
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{ 
							"id": "nickname", 
							"type": "text", 
							"name": "Nickname", 
							"width": 2, 
							"required": true 
						},
												{ 
							"id": "activity",
							"type": "autocomplete",
							"name": "Activities",
							"url": "/activity",
							"form": "ActivityForm",
							"width": 2 
						},
						{ 
							"id": "group",
							"type": "autocomplete",
							"name": "Group",
							"url": "/group",
							"form": "GroupForm",
							"width": 2 
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },

                    ]
                },
				{ 
					"id": "GroupForm",
					"title": "Group",
					"url": "/group",
					"formFieldList": [ 
						{ 
							"id": "name",
							"type": "text",
							"name": "GroupName",
							"width": 2, "required": true
						},
			    		{
		                    "id": "creationDate",
		                    "type": "date",
		                    "name": "CreationDate",
		                    "width": 2
                		},
		                {
			                "id": "comment",
			                "type": "text",
			                "name": "Comments",
			                "width": 2,
			                "height": 4,
			                "maxLength": 5000,
			            },
						{ 
							"type": "deleteButton", 
							"name": "Delete" 
						}, 
						{ 
							"type": "cancelButton",
							"name": "Cancel" 
						}, 
						{
							"type": "okButton",
							"name": "Ok" 
						} 
					] 
				},
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{ 
					"id": "ActivityForm", 
					"title": "Activity", 
					"url": "/activity", 
					"formFieldList": [ 
						{ 
							"id": "name", 
							"type": "text", 
							"name": "Activity",
							"width": 2,
							"required": true 
						}, 
				                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 1
                        },
						   {
                            "id": "date",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
						                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{ 
							"type": "deleteButton",
							"name": "Delete" },
						{ 
							"type": "cancelButton",
							"name": "Cancel"
						}, 
						{ 
							"type": "okButton",
							"name": "Ok" 
						} 
					]
				},
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-users",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "green",
                            "page": "locationspage",
                        },
						{ 
							"type": "button",
							"name": "Groups",
							"icon": "fa-weixin",
							"color": "yellow", 
							"page": "groupspage", 
						},
						{ 
							"type": "button",
							"name": "Activities",
							"icon": "fa-address-book",
							"color": "red", 
							"page": "activitiespage", 
						},
						
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "yellow",
                            "search": true,
                            "url": "/friend",
						"page": "FApage", 
                        },

                    ]
                },
				{
                    "id": "FApage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
							{
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
							"url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            },
							},
							 {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-address-book",
                            "color": "red",
                            "form": {
                                "form": "AddActivityForm"
                            },
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "green",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                        },

                    ]
                },
				
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-cubes",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationsactivitiespage", 
                        },
                    ]
                },
				{
                    "id": "locationsactivitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
							{
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-cubes",
                            "color": "blue",
							"url": "/location",
                            "form": {
                                "form": "LocationForm"
                            },
							},

                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "green",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                        },

                    ]
                },

				{ 
					"id": "groupspage", 
					"elementList": [ 
						{ 
							"type": "backbutton",
						}, 
						{ 
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "red",
							"form": { 
								"form": "GroupForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "yellow",
							"search": true,
							"url": "/group",
							"form": {	
								"form": "GroupForm"
							}
						},
					] 
				},
				{
					"id": "activitiespage", 
					"elementList": [
						{
							"type": "backbutton",
						},
						{	 
							"type": "newButton",
							"name": "NewActivity",
							"icon": "fa-address-book",
							"color": "blue",
							"form": {
								"form": "ActivityForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-address-book",
							"color": "yellow",
							"search": true,
							"url": "/activity",
							"page": "FApage", 
						},
					]
				},
				{
                    "id": "FAspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
						{
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-address-book",
                            "color": "yellow",
							"url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            },
						},
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                        },
                    ]
                },	
						
			
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}