import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Check",
					"value": "Check",
					"action": "Check",
					"description": "Test that the API and auth are working.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/check/"
						}
					}
				},
				{
					"name": "Get Configuration Link",
					"value": "Get Configuration Link",
					"action": "Get Configuration Link",
					"description": "If the user wants to execute actions that are not exposed, they can\ngo here to configure and expose more.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/configuration-link/"
						}
					}
				},
				{
					"name": "List Exposed Actions",
					"value": "List Exposed Actions",
					"action": "List Exposed Actions",
					"description": "List all the currently exposed actions for the given account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/exposed/"
						}
					}
				},
				{
					"name": "Execute App Action Endpoint",
					"value": "Execute App Action Endpoint",
					"action": "Execute App Action Endpoint",
					"description": "Give us a plain english description of exact action you want to do.\nThere should be dynamically generated documentation for this endpoint\nfor each action that is exposed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/exposed/{{$parameter[\"exposed_app_action_id\"]}}/execute/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/check/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Check"
					]
				}
			}
		},
		{
			"displayName": "Session Auth API Key",
			"name": "security_sessionauth",
			"type": "string",
			"default": "",
			"description": "API key for SessionAuth (cookie: sessionid)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'sessionid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Check"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_accesspointapikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyHeader (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Check"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_accesspointapikeyquery",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyQuery (query: api_key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Check"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/configuration-link/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Configuration Link"
					]
				}
			}
		},
		{
			"displayName": "Session Auth API Key",
			"name": "security_sessionauth",
			"type": "string",
			"default": "",
			"description": "API key for SessionAuth (cookie: sessionid)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'sessionid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Configuration Link"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_accesspointapikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyHeader (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Configuration Link"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_accesspointapikeyquery",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyQuery (query: api_key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Configuration Link"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/exposed/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Exposed Actions"
					]
				}
			}
		},
		{
			"displayName": "Session Auth API Key",
			"name": "security_sessionauth",
			"type": "string",
			"default": "",
			"description": "API key for SessionAuth (cookie: sessionid)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'sessionid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Exposed Actions"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_accesspointapikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyHeader (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Exposed Actions"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_accesspointapikeyquery",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyQuery (query: api_key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Exposed Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/exposed/{exposed_app_action_id}/execute/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Exposed App Action Id",
			"name": "exposed_app_action_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Instructions",
			"name": "instructions",
			"type": "string",
			"default": "",
			"description": "Plain english instructions. Provide as much detail as possible.",
			"routing": {
				"send": {
					"property": "instructions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Preview Only",
			"name": "preview_only",
			"type": "boolean",
			"default": false,
			"description": "If true, we will not execute the action, but will return the params of the preview.",
			"routing": {
				"send": {
					"property": "preview_only",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Session Auth API Key",
			"name": "security_sessionauth",
			"type": "string",
			"default": "",
			"description": "API key for SessionAuth (cookie: sessionid)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'sessionid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_accesspointapikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyHeader (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_accesspointapikeyquery",
			"type": "string",
			"default": "",
			"description": "API key for AccessPointApiKeyQuery (query: api_key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute App Action Endpoint"
					]
				}
			}
		},
];
