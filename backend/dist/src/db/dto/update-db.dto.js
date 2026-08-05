"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDbDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_db_dto_1 = require("./create-db.dto");
class UpdateDbDto extends (0, mapped_types_1.PartialType)(create_db_dto_1.CreateDbDto) {
}
exports.UpdateDbDto = UpdateDbDto;
//# sourceMappingURL=update-db.dto.js.map