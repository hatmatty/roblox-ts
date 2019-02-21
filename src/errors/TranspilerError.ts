import * as ts from "ts-morph";

export enum TranspilerErrorType {
	NoAny,
	ReservedKeyword,
	ReservedMethodName,
	SpreadDestructuring,
	ParameterChildMissing,
	UnexpectedParameterType,
	NoLabeledStatement,
	BadStatement,
	MissingModuleFile,
	BadSpecifier,
	BadAncestor,
	BadExpressionStatement,
	UnexpectedBindingPattern,
	UnexpectedInitializer,
	ForEmptyVarName,
	NoVarKeyword,
	UndefinableMetamethod,
	NoConstructorReturn,
	NoThisOutsideClass,
	NoNull,
	BadExpression,
	BadFunctionBody,
	ExpectedPropertyAccessExpression,
	NoMacroMathExpressionStatement,
	NoXOROperator,
	NoEqualsEquals,
	NoExclamationEquals,
	BadBinaryExpression,
	BadPrefixUnaryExpression,
	BadPostfixUnaryExpression,
	NoParentheseslessNewExpression,
	InvalidClientOnlyAPIAccess,
	InvalidServerOnlyAPIAccess,
	NoFunctionIndex,
	NoClassPrototype,
	ExportInNonModuleScript,
	RoactGettersNotAllowed,
	RoactSettersNotAllowed,
	RoactSubClassesNotSupported,
	RoactJsxTextNotSupported,
	RoactNoNewComponentAllowed,
	RoactJsxWithoutImport,
	RoactInvalidSymbol,
	RoactInvalidExpression,
	RoactInvalidCallExpression,
	RoactInvalidIdentifierExpression,
	RoactInvalidPropertyExpression,
	UnexpectedObjectIndex,
	NoExportLetKeyword,
	NoDynamicImport,
	InvalidIdentifier,
	RobloxTSReservedIdentifier,
	BadContext,
	ClassyLoop,
	MixedMethodCall,
	InvalidService,
	ReservedNamespace,
	BadAddition,
	InvalidMacroIndex,
	NoTypeOf,
}

export class TranspilerError extends Error {
	constructor(message: string, public readonly node: ts.Node, public readonly type: TranspilerErrorType) {
		super(message);
	}
}
